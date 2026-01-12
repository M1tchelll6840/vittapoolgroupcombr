import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { message: "Nome contém caracteres inválidos" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail deve ter no máximo 255 caracteres" }),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s()+-]*$/, { message: "Telefone contém caracteres inválidos" })
    .max(20, { message: "Telefone deve ter no máximo 20 caracteres" })
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Assunto deve ter pelo menos 3 caracteres" })
    .max(200, { message: "Assunto deve ter no máximo 200 caracteres" })
    .optional()
    .or(z.literal("")),
  interest: z
    .string()
    .max(50, { message: "Interesse inválido" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(2000, { message: "Mensagem deve ter no máximo 2000 caracteres" })
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Sanitize text input to prevent XSS
export function sanitizeText(text: string): string {
  return text
    .replace(/[<>]/g, "") // Remove < and > to prevent HTML injection
    .trim();
}

// Validate and sanitize form data
export function validateContactForm(data: unknown): {
  success: boolean;
  data?: ContactFormData;
  errors?: Record<string, string>;
} {
  const result = contactFormSchema.safeParse(data);
  
  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.errors.forEach((err) => {
      if (err.path[0]) {
        errors[err.path[0].toString()] = err.message;
      }
    });
    return { success: false, errors };
  }
  
  // Sanitize all string fields
  const sanitizedData: ContactFormData = {
    name: sanitizeText(result.data.name),
    email: result.data.email.toLowerCase().trim(),
    phone: result.data.phone ? sanitizeText(result.data.phone) : undefined,
    subject: result.data.subject ? sanitizeText(result.data.subject) : undefined,
    interest: result.data.interest ? sanitizeText(result.data.interest) : undefined,
    message: result.data.message ? sanitizeText(result.data.message) : undefined,
  };
  
  return { success: true, data: sanitizedData };
}

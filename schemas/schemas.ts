import { z } from "zod";

const NoEmailSchema = z.object({
	name: z.string(),
	sendToEMail: z.literal(false),
});

const EmailSchema = z.object({
	name: z.string(),
	sendToEMail: z.literal(true),
	email: z.string().email(),
});

export const FormSchema = z.discriminatedUnion("sendToEMail", [
	NoEmailSchema,
	EmailSchema,
]);

export type FormSchemaType = z.infer<typeof FormSchema>;

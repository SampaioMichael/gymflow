/**
 * Schemas de validação dos formulários de usuários.
 *
 * Responsabilidades:
 * - Validar cadastro de usuários.
 * - Validar edição de usuários.
 * - Centralizar regras de negócio do formulário.
 */

import { z } from "zod";

/**
 * Nome do usuário.
 */
const nomeSchema = z
    .string()
    .trim()
    .min(3, "Informe um nome com pelo menos 3 caracteres.")
    .max(100, "O nome deve possuir no máximo 100 caracteres.");

/**
 * E-mail.
 */
const emailSchema = z
    .string()
    .trim()
    .email("E-mail inválido.");

/**
 * Telefone.
 * Aceita:
 * - null
 * - vazio
 * - 10 ou 11 dígitos
 */
const telefoneSchema = z
    .string()
    .trim()
    .regex(/^\d{10,11}$/, "Telefone deve conter 10 ou 11 dígitos.")
    .or(z.literal(""))
    .nullable()
    .optional();

/**
 * Matrícula.
 */
const matriculaSchema = z
    .string()
    .trim()
    .max(20, "A matrícula deve possuir no máximo 20 caracteres.")
    .or(z.literal(""))
    .nullable()
    .optional();

/**
 * Senha.
 */
const senhaSchema = z
    .string()
    .min(6, "A senha deve possuir no mínimo 6 caracteres.")
    .max(100, "A senha deve possuir no máximo 100 caracteres.");

/**
 * Schema utilizado no cadastro.
 */
export const createUserSchema = z.object({
    nome: nomeSchema,

    email: emailSchema,

    telefone: telefoneSchema,

    matricula: matriculaSchema,

    senha: senhaSchema,
});

/**
 * Schema utilizado na edição.
 */
export const updateUserSchema = z.object({
    nome: nomeSchema,

    email: emailSchema,

    telefone: telefoneSchema,

    matricula: matriculaSchema,

    ativo: z.boolean(),
});
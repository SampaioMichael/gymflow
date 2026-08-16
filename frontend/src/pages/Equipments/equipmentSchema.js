/**
 * Schemas de validação dos formulários de equipamentos.
 *
 * Responsabilidades:
 * - Validar cadastro de equipamentos.
 * - Validar edição de equipamentos.
 * - Centralizar as regras de validação do formulário.
 */

import { z } from "zod";

/**
 * Nome do equipamento.
 */
const nomeSchema = z
    .string()
    .trim()
    .min(
        2,
        "Informe um nome com pelo menos 2 caracteres.",
    )
    .max(
        100,
        "O nome deve possuir no máximo 100 caracteres.",
    );

/**
 * Categoria do equipamento.
 */
const categoriaSchema = z
    .string()
    .trim()
    .min(2, "Informe a categoria do equipamento.")
    .max(
        50,
        "A categoria deve possuir no máximo 50 caracteres.",
    );

/**
 * Fabricante.
 */
const fabricanteSchema = z
    .string()
    .trim()
    .min(2, "Informe o fabricante.")
    .max(
        100,
        "O fabricante deve possuir no máximo 100 caracteres.",
    );

/**
 * Modelo.
 */
const modeloSchema = z
    .string()
    .trim()
    .min(1, "Informe o modelo.")
    .max(
        100,
        "O modelo deve possuir no máximo 100 caracteres.",
    );

/**
 * Número de patrimônio.
 */
const patrimonioSchema = z
    .string()
    .trim()
    .min(1, "Informe o patrimônio.")
    .max(
        50,
        "O patrimônio deve possuir no máximo 50 caracteres.",
    );

/**
 * Número de série.
 */
const numeroSerieSchema = z
    .string()
    .trim()
    .min(1, "Informe o número de série.")
    .max(
        100,
        "O número de série deve possuir no máximo 100 caracteres.",
    );

/**
 * Observação.
 */
const observacaoSchema = z
    .string()
    .trim()
    .max(
        500,
        "A observação deve possuir no máximo 500 caracteres.",
    )
    .or(z.literal(""))
    .optional();

/**
 * Status do equipamento.
 *
 * Os valores utilizados pelo backend são:
 * - ativo
 * - manutencao
 */
const statusSchema = z.enum(
    ["ativo", "manutencao"],
    {
        errorMap: () => ({
            message: "Informe um status válido.",
        }),
    },
);

/**
 * Schema utilizado no cadastro.
 */
export const createEquipmentSchema = z.object({
    nome: nomeSchema,
    categoria: categoriaSchema,
    fabricante: fabricanteSchema,
    modelo: modeloSchema,
    patrimonio: patrimonioSchema,
    numero_serie: numeroSerieSchema,
    observacao: observacaoSchema,
    status: statusSchema,
});

/**
 * Schema utilizado na edição.
 */
export const updateEquipmentSchema = z.object({
    nome: nomeSchema,
    categoria: categoriaSchema,
    fabricante: fabricanteSchema,
    modelo: modeloSchema,
    patrimonio: patrimonioSchema,
    numero_serie: numeroSerieSchema,
    observacao: observacaoSchema,
    status: statusSchema,
});
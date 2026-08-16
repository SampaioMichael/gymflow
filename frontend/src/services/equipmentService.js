/**
 * Serviço responsável pelas operações de equipamentos.
 *
 * Responsabilidades:
 * - Listar equipamentos.
 * - Buscar equipamento por ID.
 * - Cadastrar equipamento.
 * - Atualizar equipamento.
 * - Excluir equipamento.
 */

import api from "@/services/api";

/**
 * Lista todos os equipamentos.
 *
 * @returns {Promise<Array>}
 */
export async function listEquipments() {
    const { data } = await api.get("/equipments/");
    return data;
}

/**
 * Busca um equipamento pelo identificador.
 *
 * @param {number} id
 * @returns {Promise<Object>}
 */
export async function getEquipment(id) {
    const { data } = await api.get(`/equipments/${id}`);
    return data;
}

/**
 * Cadastra um novo equipamento.
 *
 * @param {Object} equipment
 * @returns {Promise<Object>}
 */
export async function createEquipment(equipment) {
    const { data } = await api.post(
        "/equipments/",
        equipment,
    );

    return data;
}

/**
 * Atualiza um equipamento.
 *
 * @param {number} id
 * @param {Object} equipment
 * @returns {Promise<Object>}
 */
export async function updateEquipment(id, equipment) {
    const { data } = await api.put(
        `/equipments/${id}`,
        equipment,
    );

    return data;
}

/**
 * Remove um equipamento.
 *
 * @param {number} id
 * @returns {Promise<void>}
 */
export async function deleteEquipment(id) {
    await api.delete(`/equipments/${id}`);
}
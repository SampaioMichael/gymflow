/**
 * Página de gerenciamento de equipamentos.
 *
 * Responsabilidades:
 * - Listar equipamentos.
 * - Permitir pesquisa.
 * - Controlar o carregamento dos dados.
 * - Disponibilizar cadastro, edição e exclusão.
 * - Integrar com a API.
 */

import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import ConfirmDialog from "@/components/ui/ConfirmDialog/ConfirmDialog";
import Loading from "@/components/ui/Loading/Loading";

import {
    notifyError,
    notifySuccess,
} from "@/services/notificationService";

import {
    createEquipment,
    deleteEquipment,
    listEquipments,
    updateEquipment,
} from "@/services/equipmentService";

import EquipmentList from "./components/EquipmentList";
import EquipmentModal from "./components/EquipmentModal";

import styles from "./Equipments.module.css";

function Equipments() {
    const [equipments, setEquipments] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEquipment, setSelectedEquipment] =
        useState(null);
    const [loadingSave, setLoadingSave] =
        useState(false);

    const [isDeleteOpen, setIsDeleteOpen] =
        useState(false);
    const [equipmentToDelete, setEquipmentToDelete] =
        useState(null);
    const [loadingDelete, setLoadingDelete] =
        useState(false);

    const loadEquipments = useCallback(async () => {
        try {
            setLoading(true);

            const data = await listEquipments();

            setEquipments(data);
        } catch (error) {
            notifyError(
                error.response?.data?.detail ??
                    "Erro ao carregar equipamentos.",
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadEquipments();
    }, [loadEquipments]);

    const filteredEquipments = useMemo(() => {
        const term = search.trim().toLowerCase();

        if (!term) {
            return equipments;
        }

        return equipments.filter(
            ({
                nome,
                categoria,
                fabricante,
                modelo,
                patrimonio,
                numero_serie,
            }) =>
                nome
                    .toLowerCase()
                    .includes(term) ||
                categoria
                    .toLowerCase()
                    .includes(term) ||
                fabricante
                    .toLowerCase()
                    .includes(term) ||
                modelo
                    .toLowerCase()
                    .includes(term) ||
                patrimonio
                    .toLowerCase()
                    .includes(term) ||
                numero_serie
                    .toLowerCase()
                    .includes(term),
        );
    }, [equipments, search]);

    function handleNewEquipment() {
        setSelectedEquipment(null);
        setIsModalOpen(true);
    }

    function handleEdit(equipment) {
        setSelectedEquipment(equipment);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setSelectedEquipment(null);
        setIsModalOpen(false);
    }

    async function handleSaveEquipment(form) {
        try {
            setLoadingSave(true);

            if (selectedEquipment) {
                await updateEquipment(
                    selectedEquipment.id,
                    form,
                );

                notifySuccess(
                    "Equipamento atualizado com sucesso.",
                );
            } else {
                await createEquipment(form);

                notifySuccess(
                    "Equipamento cadastrado com sucesso.",
                );
            }

            await loadEquipments();

            handleCloseModal();
        } catch (error) {
            notifyError(
                error.response?.data?.detail ??
                    "Erro ao salvar equipamento.",
            );
        } finally {
            setLoadingSave(false);
        }
    }

    function handleDelete(equipment) {
        setEquipmentToDelete(equipment);
        setIsDeleteOpen(true);
    }

    function handleCloseDelete() {
        setEquipmentToDelete(null);
        setIsDeleteOpen(false);
    }

    async function handleConfirmDelete() {
        if (!equipmentToDelete) {
            return;
        }

        try {
            setLoadingDelete(true);

            await deleteEquipment(
                equipmentToDelete.id,
            );

            notifySuccess(
                "Equipamento excluído com sucesso.",
            );

            await loadEquipments();

            handleCloseDelete();
        } catch (error) {
            notifyError(
                error.response?.data?.detail ??
                    "Erro ao excluir equipamento.",
            );
        } finally {
            setLoadingDelete(false);
        }
    }

    if (loading) {
        return (
            <Loading
                fullScreen
                text="Carregando equipamentos..."
            />
        );
    }

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1>Equipamentos</h1>

                    <p>
                        Gerencie os equipamentos
                        cadastrados na academia.
                    </p>
                </div>

                <button
                    type="button"
                    className={styles.addButton}
                    onClick={handleNewEquipment}
                >
                    Novo Equipamento
                </button>
            </header>

            <section className={styles.toolbar}>
                <input
                    type="search"
                    className={styles.search}
                    placeholder="Pesquisar equipamento..."
                    value={search}
                    onChange={(event) =>
                        setSearch(event.target.value)
                    }
                />
            </section>

            <EquipmentList
                equipments={filteredEquipments}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <EquipmentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveEquipment}
                equipment={selectedEquipment}
                loading={loadingSave}
            />

            <ConfirmDialog
                isOpen={isDeleteOpen}
                title="Excluir equipamento"
                message={
                    equipmentToDelete
                        ? `Deseja realmente excluir o equipamento "${equipmentToDelete.nome}"?`
                        : ""
                }
                confirmText="Excluir"
                cancelText="Cancelar"
                loading={loadingDelete}
                onConfirm={handleConfirmDelete}
                onCancel={handleCloseDelete}
            />
        </section>
    );
}

export default Equipments;
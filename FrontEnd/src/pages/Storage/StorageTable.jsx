import React, { useEffect, useState } from "react";
import trashIcon from "../../assets/delete-icon-trashcan.svg";
import editIcon from "../../assets/pencil-edit-icon.svg";
import supabase from "../../utils/supabase";
import BackButton from "../../components/BackButton/BackButton";

const ITEMS_PER_PAGE = 10;

const StorageTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [editForm, setEditForm] = useState({
    nome: "",
    valor_unitario: 0,
    qtd_estoque: 0,
    observacao: "",
  });

  //Fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        let { data: Items, error } = await supabase.from("Item").select("*");
        if (error) throw error;

        setData(Items);
        setFilteredData(Items);
        setTotalPages(Math.ceil(Items.length / ITEMS_PER_PAGE));
        setIsLoading(false);
      } catch (err) {
        console.error(
          "StorageTable.jsx: Erro ao buscar dados para o estoque: " + err
        );
      }
    }
    fetchData();
  }, []);

  const handleFilter = () => {
    let filtered = data;

    if (startDate) {
      filtered = filtered.filter((item) => new Date(item.created_at) >= new Date(startDate));
    }
    if (endDate) {
      filtered = filtered.filter((item) => new Date(item.created_at) <= new Date(endDate));
    }

    setFilteredData(filtered);
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    setPage(1); // Reset to the first page
  };

  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from("Item")
        .delete()
        .eq("cod_item", selectedItem.cod_item);

      if (error) throw error;

      setData(data.filter((item) => item.cod_item !== selectedItem.cod_item));
      setFilteredData(
        filteredData.filter((item) => item.cod_item !== selectedItem.cod_item)
      );
      setIsDeleteModalOpen(false);
    } catch (err) {
      console.error("Erro ao deletar item:", err);
    }
  };

  const handleEdit = async () => {
    try {
      const { error } = await supabase
        .from("Item")
        .update(editForm)
        .eq("cod_item", selectedItem.cod_item);

      if (error) throw error;

      const updatedData = data.map((item) =>
        item.cod_item === selectedItem.cod_item ? { ...item, ...editForm } : item
      );

      setData(updatedData);
      setFilteredData(updatedData);
      setIsEditModalOpen(false);
    } catch (err) {
      console.error("Erro ao editar item:", err);
    }
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setEditForm({
      nome: item.nome,
      valor_unitario: item.valor_unitario,
      qtd_estoque: item.qtd_estoque,
      observacao: item.observacao,
    });
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="bg-primary h-[100vh] w-full flex items-center justify-center">
        <span className="loading loading-dots loading-lg loading-contrastColor"></span>
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <section className="bg-white w-full max-w-[75%] p-5 rounded-lg shadow-lg">
        <nav className="w-fit flex gap-5 items-center">
          <BackButton route={"/menu"} />
          <article className="mb-2 font-bold text-[2rem]">Items em Estoque</article>
        </nav>

        <div className="mb-5 flex gap-4 items-center">
          <input
            type="date"
            className="input input-bordered bg-white text-fontColor"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="input input-bordered bg-white text-fontColor"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button className="btn bg-contrastColor hover:bg-contrastColorHover border-contrastColorHover hover:border-contrastColor text-white hover:text-white" onClick={handleFilter}>
            Filtrar
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-contrastColor text-lg text-center">
                <th>Id</th>
                <th>Nome</th>
                <th>Valor Unitário (R$)</th>
                <th>Quantidade Estoque</th>
                <th>Observação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, idx) => (
                <tr key={idx} className="text-[1rem] text-center">
                  <th>{item.cod_item}</th>
                  <td>{item.nome}</td>
                  <td>R$ {item.valor_unitario.toFixed(2)}</td>
                  <td>{item.qtd_estoque}</td>
                  <td>{item.observacao}</td>
                  <td className="flex items-center gap-5 justify-center">
                    <button
                      className="btn btn-accent text-white btn-sm"
                      onClick={() => openEditModal(item)}
                    >
                      Editar
                      <img src={editIcon} alt="pencil-icon-edit" width={16} height={16} />
                    </button>
                    <button
                      className="btn btn-error text-white btn-sm"
                      onClick={() => openDeleteModal(item)}
                    >
                      Remover
                      <img src={trashIcon} alt="trashcanIcon" width={16} height={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-5">
          <button className="btn btn-secondary" onClick={prevPage} disabled={page === 1}>
            Anterior
          </button>
          <span className="text-lg font-bold">
            Página {page} de {totalPages}
          </span>
          <button className="btn btn-secondary" onClick={nextPage} disabled={page === totalPages}>
            Próxima
          </button>
        </div>
      </section>

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box bg-primaryColor">
            <h3 className="font-bold text-lg">Tem certeza que deseja remover?</h3>
            <p className="py-4">Essa ação não pode ser desfeita.</p>
            <div className="modal-action">
              <button className="btn btn-success" onClick={handleDelete}>
                Confirmar
              </button>
              <button className="btn btn-error" onClick={() => setIsDeleteModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box bg-primaryColor">
            <h3 className="font-bold text-2xl text-fontColor">Editar Item</h3>
            <div className="py-4">
              <label htmlFor="editForm__name">Nome do Item</label>
              <input
                type="text"
                className="input input-bordered bg-white w-full mb-2"
                value={editForm.nome}
                onChange={(e) => setEditForm({ ...editForm, nome: e.target.value })}
              />
              <label htmlFor="editForm__name">Novo Valor Unitário (R$)</label>
              <input
                type="number"
                className="input input-bordered bg-white w-full mb-2"
                value={editForm.valor_unitario.toFixed(2)}
                onChange={(e) => setEditForm({ ...editForm, valor_unitario: parseFloat(e.target.value) })}
              />
              <label htmlFor="editForm__name">Nova quantidade em estoque</label>
              <input
                type="number"
                className="input input-bordered bg-white w-full mb-2"
                value={editForm.qtd_estoque}
                onChange={(e) => setEditForm({ ...editForm, qtd_estoque: parseInt(e.target.value, 10) })}
              />
              <label htmlFor="editForm__name">Observação</label>
              <input
                type="text"
                className="input input-bordered bg-white w-full"
                value={editForm.observacao}
                onChange={(e) => setEditForm({ ...editForm, observacao: e.target.value })}
              />
            </div>
            <div className="modal-action">
              <button className="btn btn-success" onClick={handleEdit}>
                Salvar
              </button>
              <button className="btn btn-error text-white" onClick={() => setIsEditModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorageTable;

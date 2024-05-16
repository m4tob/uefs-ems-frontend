import Header from "components/Headers/Header.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown
} from "reactstrap";
import GrandezaService from "services/GrandezaService.js";

const List = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await GrandezaService.list();
      setResults(response.data);
      setIsLoading(false);
    }
    fetchData();
  }, [isLoading]);

  const DataRow = ({ id, nome, unidadeMedida, sigla }) => {
    return (
      <tr>
        <th>{id}</th>
        <td>{nome}</td>
        <td>{unidadeMedida}</td>
        <td>{sigla}</td>
        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              role="button"
              size="sm"
              color=""
              onClick={(e) => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem
                onClick={(e) => {
                  navigate(`/admin/grandezas/edit/${id}`);
                }}
              >
                Editar
              </DropdownItem>
              <DropdownItem
                onClick={(e) => {
                  if (window.confirm('Deseja realmente excluir este registro?')) {
                    GrandezaService.delete(id);
                    setIsLoading(true);
                  }
                }}
              >
                Remover
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    );
  }

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3 className="text-white mb-0">Gerenciamento de Grandezas</h3>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={async () => {
                      navigate("/admin/grandezas/edit");
                    }}
                  >
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Un. Medida</th>
                    <th scope="col">Sigla</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {
                    (results.length === 0) ? <tr><td colSpan="5">Nenhum registro encontrado</td></tr>
                      : results?.map((record) => {
                        return <DataRow key={record.id} {...record} />
                      })
                  }
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default List;

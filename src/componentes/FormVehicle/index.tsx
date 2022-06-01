import './index.css';

export interface VehicleInputList {
  Name_Complete: React.RefObject<HTMLInputElement>;
  Year: React.RefObject<HTMLInputElement>;
  Address: React.RefObject<HTMLInputElement>;
  Sexo: React.RefObject<HTMLInputElement>;
  Number: React.RefObject<HTMLInputElement>;
  id: React.RefObject<HTMLInputElement>;
}

interface Props {
  handleOnSubmit(e: React.FormEvent<HTMLFormElement>): void;
  inputList: VehicleInputList;
  isAdding: boolean;
}

function FormVehicle({ 
    handleOnSubmit,
    inputList: { 
      id,
      Name_Complete,
      Year,
      Address,
      Sexo,
      Number
    },
    isAdding
  }: Props) {
  return (
    <form onSubmit={handleOnSubmit}>
      <input ref={id} type="hidden" id="id" name="id" />
      <br />
      <label htmlFor="Name_Complete">Nome Do Fornecedor</label>
      <br />
      <input ref={Name_Complete} id="Name_Complete" name="Name_Complete" type="text" placeholder='Insira a descrição'/>
      <label htmlFor="Year">Endereço </label>
      <br />
      <input ref={Address} id="Address" name="Address" type="text" placeholder='Insira o Endereço'/>
      <br />
      <label htmlFor="Number"> Número de celular </label>
      <br />
      <input ref={Number} id="Number" name="Number" type="Number" placeholder='Insira o número de celular'/>
      <br />
      <br />
      <input type="submit" value={isAdding ? "Criar usuário" : "Alterar"} />
    </form>
  )
}

export default FormVehicle

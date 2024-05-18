// src/components/Form.styles.ts
import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  justify-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

export const ImageItem = styled.img`
  width: 100%;
  height: auto; /* Permitindo que a altura seja ajustada automaticamente */
  max-height: 100px; /* Definindo uma altura máxima para todas as imagens */
  border: 1px solid #ccc;
  border-radius: 4px;
`;
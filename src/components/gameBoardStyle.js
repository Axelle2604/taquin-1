import PropTypes from 'prop-types';

import styled from 'styled-components';

import { DIFFILCULTY } from '../utils/constantes';

export const Board = styled.div`
  margin: auto;
  position: relative;
  display: inline-block;
  width: ${DIFFILCULTY * 150}px;
  height: ${DIFFILCULTY * 150}px;
`;

export const Case = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  box-sizing: border-box;
  border: #fff 1px solid;
  background-image: url('https://animalcenter.org/wp-content/uploads/2016/02/Blue-Eyed-Kittens.jpg');
  background-size: ${DIFFILCULTY * 101}%;
  background-position-x: ${({ bgPosition: { x } }) => x * 150}px;
  background-position-y: ${({ bgPosition: { y } }) => y * 150}px;
  top: ${({ position: { x } }) => x * 150}px;
  left: ${({ position: { y } }) => y * 150}px;
  transition: all 0.4s ease-in;
`;

export const VictoryBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000000b5;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

Case.propTypes = {
  position: PropTypes.object,
  bgPosition: PropTypes.object,
};

/* eslint-disable react/prop-types */
import * as S from './styles';

export const TutorContact = ({ userFirstName, userEmail, userPhone }) => {
  return (
    <S.TutorContacts>
      <S.TutorInfos> {`Nome: ${userFirstName}`}</S.TutorInfos>
      <S.TutorInfos> {`E-mail: ${userEmail}`}</S.TutorInfos>
      <S.TutorInfos> {`Telefone: ${userPhone}`}</S.TutorInfos>
    </S.TutorContacts>
  );
};

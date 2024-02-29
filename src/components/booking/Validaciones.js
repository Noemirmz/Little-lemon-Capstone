import * as Yup from 'yup';
 
 export const ReservationSchema = Yup.object().shape({
   Date: Yup.string()
     .required('Required'),
   Time: Yup.string()
     .required('Required'),
   Guest: Yup.number()
    .required('Required'),
    Occasion: Yup.number()
    .required('Required')
 });
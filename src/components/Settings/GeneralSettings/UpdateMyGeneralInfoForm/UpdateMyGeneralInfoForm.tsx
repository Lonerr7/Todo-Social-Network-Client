// import s from '../../../../styles/formStyle.module.scss';
// import * as yup from 'yup';
// import { Form, Formik } from 'formik';
// import FormControl from '../../../common/FormControl/FormControl';
// import FormError from '../../../common/FormError/FormError';
// import FormStatus from '../../../common/FormStatus/FormStatus';
// import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
// import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
// import { MainInfoInitialValues } from '../../../../types/FormikTypes';
// import { updateMyMainInfo } from '../../../../redux/myselfSlice';

// const validationSchema = yup.object({
//   cityOfBirth: yup.string().max(20, 'City name is too long'),
//   nativeLanguage: yup.string().max(20, 'Language name is too long'),
// });

// const UpdateMyGeneralInfoForm: React.FC = () => {
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={onSubmit}
//       validationSchema={validationSchema}
//     >
//       <Form className={s.form}>
//         <FormControl
//           customClass={s.form__control}
//           field="cityOfBirth"
//           placeholder="City of birth"
//           type="text"
//           inputClass={s.form__input}
//           label="City of birth"
//           labelClass={s.form__label}
//         />
//         <FormControl
//           customClass={s.form__control}
//           field="nativeLanguage"
//           placeholder="Native language"
//           type="text"
//           inputClass={s.form__input}
//           label="Native language"
//           labelClass={s.form__label}
//         />
//         <div className={s.form__box}>
//           <SubmitLoadingBtn
//             btnClass={s.form__btn}
//             btnType="submit"
//             btnText="Update main information"
//             btnFetchingText="Updating main information"
//             isFetching={isMyMainInfoFetching}
//             onSubmit={() => {}}
//           />
//           <FormStatus
//             isSuccessfulySent={isUserMainInfoSuccessfulySent}
//             preloaderClass={s.form__preloader}
//             msgClass={s.form__success}
//           />
//         </div>
//         <FormError
//           customClass={s.form__error}
//           errorMsg={updateMyMainInfoErrorMsg}
//         />
//       </Form>
//     </Formik>
//   );
// };

// export default UpdateMyGeneralInfoForm;

export const a = 1;
import { useFormContext} from "react-hook-form"
import style from "../../styles/homestayform.module.css"
import classNames from 'classnames'


 function Step1(params) {
     const {register,control,formState: { errors }} = useFormContext();
   //  console.log(errors);

    return(
        
      <div style={{borderRadius:"10px"}} className="card mb-5 mt-3 shadow" > 
      <div className="card-header" >Personal Information</div>
      <div className ="card-body">
      <div className={style.step1}>
      <div className="row mb-2">

      <div className="form-group col">
          <label htmlFor="hostName" className="mb-1" >Host Name</label>
          <input
          id="hostName"
          name ="hostName"
          type='text'
          className={classNames("form-control", {"is-invalid": errors.hostName})}
          placeholder="Host Name"
          {...register("hostName", {
            required: "This is required",
          })}
              />  
          {errors.hostName &&(
            <div className="invalid-feedback">{errors.hostName.message}</div>
          ) } 
          
       </div>

      
      <div className="form-group col">
       <label htmlFor="phone" className="form-label">Phone No.</label>
         <div className="input-group">
          
          <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">+91</span>
        </div>
          <input        
          id="phone"
          name ="phone"
          type='number'
          className={classNames("form-control", {"is-invalid": errors.phone})}
          placeholder="Phone No."
          aria-describedby="basic-addon1"
          {...register("phone", {
            required: "This is required",
            pattern: { value: /^\d{10}$/, message: "Enter a valid phone no " }       
          })}
              />  
          {errors.phone &&(
            <div className="invalid-feedback">{errors.phone.message}</div>
          ) }
          </div>
       
        </div>
        
        </div>

        <div className="row  mb-3">

        <div className="form-group col">
          <label htmlFor="email" className="mb-1">E-mail Address</label>
          <input
          id="email"
          name ="email"
          type='text'
          className={classNames("form-control", {"is-invalid": errors.email})}
          placeholder="email"
          {...register("email", {
            required: "This is required",
            pattern:{
              value:  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message:"Enter a valid email"
            }
          })}
              />  
          {errors.email &&(
            <div className="invalid-feedback">{errors.email.message}</div>
          ) }
       
       </div>

       <div className="form-group col">
       <label htmlFor="adhar" className="mb-1">Adhar No.</label>
          <input
          id="adhar"
          name ="adhar"
          type='number'
          className={classNames("form-control", {"is-invalid": errors.adhar})}
          placeholder="Adhar No."
          {...register("adhar", {
            required: "This is required",
          })}
              />  
          {errors.adhar &&(
            <div className="invalid-feedback">{errors.adhar.message}</div>
          ) }
       </div>

    </div>
   
  
  <fieldset className="row border p-3 mt-5 mb-4">
   <legend className="px-2" >Family details</legend>
   <div className="form-group col">
          <input
          id="males"
          name ="males"
          type='number'
          width="30wh"
          className={classNames("form-control", {"is-invalid": errors.males})}
          placeholder="No. of Males(above 15)"
          {...register("males", {
            required: "This is required",
          })}
              />  
          {errors.males &&(
            <div className="invalid-feedback">{errors.males.message}</div>
          ) }
       </div>

       <div className="form-group col">
          <input
          id="females"
          name ="females"
          type='number'
          width="30wh"
          className={classNames("form-control", {"is-invalid": errors.females})}
          placeholder="No. of Females(above 15)"
          {...register("females", {
            required: "This is required",
          })}
              />  
          {errors.females &&(
            <div className="invalid-feedback">{errors.females.message}</div>
          ) }
       </div>

       <div className="form-group col">
          <input
          id="children"
          name ="children"
          type='number'
          width="30wh"
          className={classNames("form-control", {"is-invalid": errors.children})}
          placeholder="No. of Children(below 15)"
          {...register("children", {
            required: "This is required",
          })}
              />  
          {errors.children &&(
            <div className="invalid-feedback">{errors.children.message}</div>
          ) }
       </div>
       </fieldset>

       </div>
        </div>    
      </div>
        
    )
}

export default Step1
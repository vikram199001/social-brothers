import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const CreateBlog = ({ addBlogPost , categories }) => {
 
  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm({ defaultValues: { "image": ""}});
  debugger

  const watchFile = watch("image", false);

  const onSubmit = data => {
    console.log(data);
    addBlogPost(data);
    reset();
  }

  return (
    <Form className="p-3 create-blog">
      <Form.Label className="create-section-heading">Plaats een blog bericht</Form.Label>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className="create-sub-heading">Berichtnaam</Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Geen titel" {...register("title", { required: true } )} />
        {errors.title && <span className="error">This field is required</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className="create-sub-heading">Categorie</Form.Label>
        <Form.Select className="form-input" aria-label="Default select example" 
        {...register("category_id", { required: true })}>
          <option className="form-option">Geen categorie</option>
          {categories &&
            categories.map((item, i) => {
              return <option value={item.id}>{item.name}</option>;
            })}
        </Form.Select>
        {errors.category_id && <span className="error">This field is required</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="create-sub-heading">header-afbeelding
          <Form.Control
              id="fileUpload"
              type="file"
              style={{ display: "none" }}
              {...register("image", { required: true })} 
          />
          <div className="img-upload"><span htmlFor="fileUpload" style={{ cursor: "pointer" }} >
            <i className="fa fa-camera"/>
            </span>
            <span className="m-2 selected-file">{watchFile && watchFile[0] ? watchFile[0].name : 'Kies bestand'}</span>
          </div>
        {errors.image && <span className="error">This field is required</span>}

      </Form.Label>
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="create-sub-heading">Bericht</Form.Label>
          <Form.Control className="form-input" as="textarea" rows={10} {...register("content", { required: true })} />
        {errors.content && <span className="error">This field is required</span>}
        </Form.Group>
        <Form.Group>
      </Form.Group>
      <div className="d-flex justify-content-center m-3">
          <button className="orange-round-btn" onClick={handleSubmit(onSubmit)}>Bericht aanmaken</button>
      </div>
    </Form>
  );
};

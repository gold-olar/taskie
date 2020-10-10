import React, { useContext, useState } from "react";
import { FormGroup, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { handleCollectionCreation } from "./helper";
import { Context as CollectionsContext } from "../../../context/collectionsContext";

const AddCollection = ({ setShowModal }) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);

  const { addNewCollection } = useContext(CollectionsContext);

  const submit = (formData) => {
    return handleCollectionCreation(
      formData,
      setLoading,
      setShowModal,
      addNewCollection
    );
  };

  return (
    <>
      <h5 className="text-center mb-3">Add Collection</h5>

      <form onSubmit={handleSubmit(submit)}>
        <FormGroup>
          <label
            className={errors.title ? "error-label" : "label"}
            htmlFor="Title "
          >
            Title
          </label>
          <input
            ref={register({ required: true })}
            className="form-control"
            type="text"
            name="title"
          />
        </FormGroup>

        <Button
          variant="primary"
          block={true}
          size={"md"}
          type="submit"
          disabled={loading}
          className="mt-4"
        >
          {!loading && <span>Add Collection</span>}

          {loading && (
            <Spinner
              animation="border"
              size="sm"
              role="status"
              aria-hidden={true}
              className="align-baseline"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </Button>
      </form>
    </>
  );
};

export default AddCollection;

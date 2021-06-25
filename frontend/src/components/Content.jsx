import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Login from "components/Login";
import Logout from "components/Logout";
import Register from "components/Register";
import { useMutation } from "@apollo/client";
import { DELETE_RECIPE } from "mutations/gqlQueriesMutations";

export default function Content({ recipes, refetch, isLoggin }) {
  const [deleteRecipe, { loading: mutationLoading, error: mutationError }] =
    useMutation(DELETE_RECIPE, {
      onCompleted: () => {
        refetch();
      },
      onError: (err) => {
        console.log(err);
      },
    });
  const header = (img) => {
    return (
      <img
        alt="Card"
        src={img}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      />
    );
  };
  const footer = (id) => {
    return (
      isLoggin && (
        <span>
          <Button
            label="Usuń"
            icon="pi pi-times"
            className="p-button-secondary p-ml-2"
            onClick={() => deleteRecipe({ variables: { id: id } })}
          />
        </span>
      )
    );
  };
  return (
    <div className="p-d-flex p-jc-evenly p-flex-wrap">
      <div style={{ margin: "0 20px" }}>
        {!isLoggin ? (
          <div
            className="p-d-flex p-jc-center p-ai-center p-flex-wrap"
            style={{ width: "100%", gap: "50px" }}
          >
            <Login />
            OR
            <Register />
          </div>
        ) : (
          <Logout />
        )}
      </div>
      <div
        className="p-d-flex p-ai-center p-jc-evenly p-flex-wrap"
        style={{ width: "100%", gap: "50px", marginTop: "40px" }}
      >
        {recipes?.map((recipe) => (
          <Card
            title={recipe.recipeName}
            style={{ width: "25em" }}
            footer={footer(recipe.id)}
            header={header(recipe.recipeImageSrc)}
            key={recipe.recipeName}
          >
            <p className="p-m-0" style={{ lineHeight: "1.5" }}>
              {recipe.recipeDescription}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

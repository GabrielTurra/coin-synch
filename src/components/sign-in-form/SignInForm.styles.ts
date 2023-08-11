import { styled } from "@/stitches.config";

export const SignInFormComponent = styled("form", {
  fieldset: {
    marginTop: "$6",
    border: "none",

    "> div": {
      marginTop: "$4"
    }, 

    a: {
      color: "$gray500",
      fontSize: "$xs",
      height: "100%",
      display: "block",
      textAlign: "end",
      margin: "$2 0 $4 0",
      textDecoration: "none",
      transition: "all 0.3s ease",

      "&:hover":{
        color: "$primary"
      },
    }
  },

  p: {
    textAlign: "center",
    marginTop: "$4",

    strong: {
      cursor: "pointer",
    }
  },

  strong: {    
    span: {
      color: "$primary",
    }
  }
});

export const Title = styled("h4", {
  fontWeight: "$regular",
  textAlign: "center",
});

export const ErrorMessage = styled("p", {
  width: "100%", 
  height: "5px",
  display: "block",
  marginBottom: "$6",
  color: "$red300 !important",
  fontSize: "$xs !important",
  textAlign: "center"
});

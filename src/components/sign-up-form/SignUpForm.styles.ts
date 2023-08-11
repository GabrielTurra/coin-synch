import { styled } from "@/stitches.config";

export const SignUpFormComponent = styled("form", {
  fieldset: {
    margin: "$6 0 $2 0",
    border: "none",

    "> div": {
      marginTop: "$4"
    }, 

    a: {
      color: "$gray500",
      fontSize: "$xs",
      float: "right",
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

export const Error = styled("p", {
  height: "5px",
  marginBottom: "$4",
  color: "$red300 !important",
  fontSize: "$xs !important",
  textAlign: "center"
});

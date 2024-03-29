export const utils = <const> {
  m: (value: string) => ({
    margin: value,
  }),
  mt: (value: string) => ({
    marginTop: value,
  }),
  mr: (value: string) => ({
    marginRight: value,
  }),
  mb: (value: string) => ({
    marginBottom: value,
  }),
  ml: (value: string) => ({
    marginLeft: value,
  }),
  mx: (value: string) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: string) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: (value: string) => ({
    padding: value,
  }),
  pt: (value: string) => ({
    paddingTop: value,
  }),
  pr: (value: string) => ({
    paddingRight: value,
  }),
  pb: (value: string) => ({
    paddingBottom: value,
  }),
  pl: (value: string) => ({
    paddingLeft: value,
  }),
  px: (value: string) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: string) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  br: (value: string) => ({
    borderRadius: value,
  }),
};
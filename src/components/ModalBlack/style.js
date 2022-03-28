import styled from "styled-components";

const stylizedModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    width: "597px",
    height: "262px",
    backgroundColor: "#333333",
    borderRadius: "50px",

    textAlign: "center",
    border: "none",
  },

  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
};

const InsideModal = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 70%;
    line-height: 41px;
    font-weight: 700;
    font-size: 34px;
    color: white;
  }
`;

const BoxButtons = styled.div`
  margin-top: 39px;

  button {
    width: 134px;
    height: 37px;

    border: none;
    border-radius: 5px;
    font-size: 18px;

    :first-child {
      margin-right: 27px;
      color: #1877f2;
      background: white;
    }

    :last-child {
      color: white;
      background-color: #1877f2;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

export { stylizedModal, InsideModal, BoxButtons };

import { styled } from "styled-components";
import Antsider from "../Components/UI/antSider";
import Navbar from "../Components/UI/Navbar";
import Home from "../Components/Home/Home";
import Sidebar from "../Components/UI/Sidebar";

const SharedLayout = () => {
  const Wrapper = styled.section`
    .dashboard {
      display: flex;
      grid-template-columns: 1fr;
    }
    .dashboard-page {
      width: 90vw;
      margin: 0 auto;
      padding: 2rem 0;
    }
    @media (min-width: 900px) {
      .dashboard {
        grid-template-columns: auto 1fr;
      }
      .dashboard-page {
        width: 100%;
      }
    }
  `;
  return (
    <>
      <Wrapper>
        <main className="dashboard">
          {/* <Antsider /> */}
          <Sidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Home />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default SharedLayout;

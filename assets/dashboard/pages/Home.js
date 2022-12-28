import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import InvestmentsContext from "../context/investments/investmentsContext";
import { API_URL } from "../config/endpoints";

function Home() {
  const { userInvestments, investmentOpportunities } =
    React.useContext(InvestmentsContext);

  console.log({ investmentOpportunities });
  return (
    <Layout>
      <Header />

      <div className="section">
        <div className="container">
          <div className="accordion mb-4" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2
                className="accordion-header text-white"
                id="panelsStayOpen-headingOne"
              >
                <button
                  className="accordion-button p-0 mb-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  My Investments ({userInvestments?.length})
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body p-0">
                  <table className="table table-borderless pb-5">
                    <thead className="table-row fs-sm">
                      <tr>
                        <th scope="col">Icon</th>
                        <th scope="col">Project</th>
                        <th scope="col">Coin</th>
                        <th scope="col">Amount</th>
                        <th scope="col">APR</th>
                        <th scope="col">LOCK TIME</th>
                        <th scope="col">INVESTMENT DATE</th>
                        <th scope="col">VEST DATE</th>
                        <th scope="col">ROI TO DATE</th>
                        <th scope="col">STATUS</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody className="table-row">
                      {userInvestments?.length ? (
                        userInvestments.map((userInvestment, idx) => (
                          <tr key={idx}>
                            <th scope="row">
                              <img
                                src={`${API_URL}/media/${userInvestment?.stakingPlan?.currency?.imagePath}`}
                                alt=""
                              />
                            </th>
                            <td>
                              {userInvestment?.stakingPlan?.currency?.name}
                            </td>
                            <td>
                              {userInvestment?.stakingPlan?.currency?.token}
                            </td>
                            <td>{userInvestment?.amount}</td>
                            <td>10%</td>
                            <td>30 days</td>
                            <td>12/11/2023</td>
                            <td>12/11/2023</td>
                            <td>
                              {(userInvestment?.amount || 0) / 100} &nbsp;{" "}
                              {userInvestment?.stakingPlan?.currency?.token}
                            </td>
                            <td className="dash-btn-w">
                              <span
                                href=""
                                className="dash-btn dash-btn-sm btn-sm-yellow center ms-0"
                              >
                                {userInvestment?.status}
                              </span>
                            </td>
                            <td className="dash-btn-w">
                              <div className="dropdown show">
                                <a
                                  className="btn dash-btn clear-btn mx-3 dropdown-toggle"
                                  href="#"
                                  role="button"
                                  id="dropdownMenuLink"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Actions
                                </a>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuLink"
                                >
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- TABLE 2 --> */}
          <div className="row pb-3">
            <div className="col-lg-12">
              <h2 className="text-white">
                Investment Opportunities ({investmentOpportunities?.length})
              </h2>
            </div>
          </div>
          <table className="table table-borderless">
            <thead className="table-row fs-sm">
              <tr>
                <th scope="col">Icon</th>
                <th scope="col">Project</th>
                <th scope="col">Coin</th>
                <th scope="col">APR</th>
                <th scope="col">LOCK TIME</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody className="table-row">
              {investmentOpportunities?.length ? (
                investmentOpportunities.map((opportunity, idx) => (
                  <tr key={idx}>
                    <th scope="row">
                      <img
                        src={`${API_URL}/media/${opportunity?.currency?.imagePath}`}
                        alt=""
                      />
                    </th>
                    <td>{opportunity?.currency?.name}</td>
                    <td>{opportunity?.currency?.token}</td>
                    <td>{opportunity?.durations[0].apr}%</td>
                    <td>{opportunity?.durations[0].duration} days</td>
                    <td className="dash-btn-w">
                      <span
                        href=""
                        className="btn dash-btn green-gradient center mx-3 ms-0"
                      >
                        Enter
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* <!-- MODALS --> */}
        <div className="section pt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <!-- Buttons trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Modal 1
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                >
                  Modal 2
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop3"
                >
                  Modal 3
                </button>

                {/* <!-- Modal 1 --> */}
                <div
                  className="modal modalfade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <a
                        type="button"
                        className="text-white ms-3 mb-3"
                        data-bs-dismiss="modal"
                      >
                        <i className="fa-solid fa-circle-arrow-left fa-xl"></i>
                      </a>
                      <div className="main-box">
                        <div className="row">
                          <div className="col-lg-12 text-start">
                            <h2 className="pb-4">Staking Panel</h2>
                            <div className="pb-5">
                              <img
                                src="/build/images/multiversx.png"
                                alt=""
                                className="w-40 me-3"
                              />
                              <span className="fs-md">MultiversX (EGLD)</span>
                            </div>
                            <h3 className="pb-4">Select Strategy</h3>
                            <a
                              href=""
                              className="btn form-box modal-btn w-100 mb-3"
                            >
                              <div className="row">
                                <div className="col-lg-6 text-start fs-md">
                                  30 <span className="fs-xs">days</span>
                                </div>
                                <div className="col-lg-6 text-end fs-md">
                                  1.5% <span className="fs-xs">APR</span>
                                </div>
                              </div>
                            </a>
                            <a
                              href=""
                              className="btn form-box modal-btn w-100 mb-3"
                            >
                              <div className="row">
                                <div className="col-lg-6 text-start fs-md">
                                  60 <span className="fs-xs">days</span>
                                </div>
                                <div className="col-lg-6 text-end fs-md">
                                  4.5% <span className="fs-xs">APR</span>
                                </div>
                              </div>
                            </a>
                            <a
                              href=""
                              className="btn form-box modal-btn w-100 mb-3"
                            >
                              <div className="row">
                                <div className="col-lg-6 text-start fs-md">
                                  80 <span className="fs-xs">days</span>
                                </div>
                                <div className="col-lg-6 text-end fs-md">
                                  6.5% <span className="fs-xs">APR</span>
                                </div>
                              </div>
                            </a>
                            <a href="" className="btn form-box modal-btn w-100">
                              <div className="row">
                                <div className="col-lg-6 text-start fs-md">
                                  120 <span className="fs-xs">days</span>
                                </div>
                                <div className="col-lg-6 text-end fs-md">
                                  10.5% <span className="fs-xs">APR</span>
                                </div>
                              </div>
                            </a>
                            <h3 className="pt-5 pb-4">Amount</h3>
                            <div className="input-group form-box p-3 w-50 mb-5">
                              <input
                                type="text"
                                className="form-control text-white fs-md"
                                placeholder="..."
                                aria-label="..."
                                aria-describedby="basic-addon2"
                              />
                              <span
                                className="text-end fs-xs center-right"
                                id="basic-addon2"
                              >
                                EGLD
                              </span>
                            </div>
                            <h3 className="mb-5">
                              In <span className="text-tertiary">60 days,</span>{" "}
                              you will earn{" "}
                              <span className="text-tertiary">0.22 EGLD</span>
                            </h3>
                            <a
                              href=""
                              className="btn hero-gradient hero-btn w-100"
                            >
                              Finalise Deposit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Modal 2 --> */}
                <div
                  className="modal modalfade"
                  id="staticBackdrop2"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel2"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <a
                        type="button"
                        className="text-white ms-3 mb-3"
                        data-bs-dismiss="modal"
                      >
                        <i className="fa-solid fa-circle-arrow-left fa-xl"></i>
                      </a>
                      <div className="main-box">
                        <div className="row">
                          <div className="col-lg-12 text-start">
                            <h2 className="pb-4">Staking Panel</h2>
                            <div className="pb-5">
                              <img
                                src="/build/images/multiversx.png"
                                alt=""
                                className="w-40 me-3"
                              />
                              <span className="fs-md">MultiversX (EGLD)</span>
                            </div>
                            <h3 className="mb-3">
                              Strategy:{" "}
                              <span className="text-tertiary">60 days</span> at{" "}
                              <span className="text-tertiary">4.5% APR</span>
                            </h3>
                            <h3 className="pb-4">
                              Amount:{" "}
                              <span className="text-tertiary">30 EGLD</span>
                            </h3>

                            <div className="model-info-box mb-5">
                              <p className="fs-sm">
                                To start earning rewards, please the 30 EGLD in
                                the wallet provide below. Please pay attention
                                as transfers on the wrong networks or wallets
                                cannot be reimbursed.
                              </p>
                              <div className="dropdown mb-4">
                                <a
                                  className="btn btn-secondary dropdown-toggle w-100 modal-dropdown-btn text-start"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Choose Network
                                </a>
                                <ul
                                  className="dropdown-menu w-100"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Elrond Network (Erc20)
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Another network
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Another network
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <p className="fs-sm">
                                Send{" "}
                                <span className="text-tertiary">30 EGLD</span>{" "}
                                to the following wallet
                              </p>
                              <div className="link-box">
                                <p id="sample" className="text-white">
                                  Erd198Tsmsksqe2Esnx74Xchglwxwck8Vaztmlfakr93Jsfhmdw6C22Sx7Ga97
                                </p>
                                <span className="d-flex justify-content-end">
                                  <a
                                    href="#"
                                    // onClick="CopyToClipboard('sample');return false;"
                                  >
                                    <i className="fa-regular fa-copy fa-2x"></i>
                                  </a>
                                </span>
                              </div>
                            </div>

                            <a
                              href=""
                              className="btn hero-gradient hero-btn w-100"
                            >
                              Mark As Paid
                            </a>
                            {/* <!-- DISABLED BUTTON --> */}
                            {/* <!-- <a href="" className="btn hero-btn w-100 modal-btn-disabled">Mark As Paid</a> --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Modal 3 --> */}
                <div
                  className="modal modalfade"
                  id="staticBackdrop3"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel2"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <a
                        type="button"
                        className="text-white ms-3 mb-3"
                        data-bs-dismiss="modal"
                      >
                        <i className="fa-solid fa-circle-arrow-left fa-xl"></i>
                      </a>
                      <div className="main-box">
                        <div className="row">
                          <div className="col-lg-12 text-start">
                            <img
                              src="/build/images/check-mark.png"
                              alt=""
                              className="mb-5"
                            />
                            <h1 className="mb-5">Congratulations!</h1>
                            <p className="pb-3 fs-md">
                              Thank you for contributing to this staking pool. A
                              team member has already been notified of your
                              deposit and once the funds have arrived, we will
                              enable your investment.
                            </p>
                            <p className="pb-3 fs-md">
                              To speed up the process, please provide the hash
                              tx in the field below (optional).
                            </p>
                            <div className="link-box mb-5">
                              <textarea
                                placeholder="Hash tx here ..."
                                name="hashtx"
                                id="hashtx"
                                cols="40"
                                rows="3"
                                className="form-control text-white fs-md"
                              ></textarea>
                            </div>
                          </div>
                          <a
                            href=""
                            className="btn hero-gradient hero-btn w-100 mb-4"
                          >
                            Save Hash
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

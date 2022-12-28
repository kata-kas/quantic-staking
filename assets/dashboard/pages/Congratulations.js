import React from "react";
import { useNavigate } from "react-router-dom";

export default function Congratulations() {
  const navigate = useNavigate();

  const navigateToHomePage = () => navigate("/dashboard/");

  return (
    <section class="h-100">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 p-5 text-center">
            <img src="/img/check-mark.png" alt="" class="mb-4" />
            <h1 class="mb-4">Congratulations</h1>
            <p class="pb-5">
              Your account creation request has been submitted and a member of
              our compliance team will review your application shortly and make
              a decision.
            </p>
            <a
              onClick={navigateToHomePage}
              href=""
              class="btn hero-gradient hero-btn w-100 mb-4"
            >
              Back To Homepage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

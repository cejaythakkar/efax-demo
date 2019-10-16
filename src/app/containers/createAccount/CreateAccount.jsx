import React, { Component } from "react";
import Pano from "../../components/pano/pano";
import Steps from "../../components/steps/steps";
import Popup from "../../components/popup/Popup";
import { connect } from "react-redux";
import * as selectors from "@containers/App/selectors";

class CreateAccount extends Component {
  render = () => (
    <>
      <Pano
        imageSrc={`images/icon-server.svg`}
        labelText="Large file sharing and unlimited file storage"
      ></Pano>

      <div class="create-account-pg">
        <div class="container">
          <Steps></Steps>
          <div class="row row-spacing justify-content-center">
            <div class="col-12 col-md-6 col-lg-5 col-xl-4">
              <div class="row">
                <div class="col-md-11">
                  <div class="funnel-plan-details">
                    <div class="review-plan">
                      <h1 class="font-weight-bold h2">Review your plan</h1>
                      <h3 class="font-regular">
                        Your eFax number will be
                        <a href="tel:(310)222-1215">
                          {this.props.selectedNumber}
                        </a>
                      </h3>
                      <div class="pricing-plans-dd">
                        <div class="dropdown dropdown-list">
                          <button
                            type="button"
                            class="btn btn-lt-grey dropdown-toggle"
                            data-toggle="dropdown"
                            id="dropdown-selected"
                          >
                            <p>
                              eFax Plus $16.95{" "}
                              <span class="small">per month</span>
                            </p>
                            <p class="font-weight-bold d-block text-uppercase lt-green">
                              1 month free trial
                            </p>
                          </button>
                          <div class="dropdown-menu">
                            <ul class="list-unstyled">
                              <li
                                class="dropdown-item"
                                data-attr-val="freetrial"
                              >
                                <p>
                                  eFax Plus $16.95{" "}
                                  <span class="small">per month</span>
                                </p>
                                <p class="font-weight-bold text-uppercase lt-green small">
                                  1 month free trial
                                </p>
                              </li>
                              <li
                                class="dropdown-item"
                                data-attr-val="permonth"
                              >
                                <p class="mtb-10">
                                  eFax Pro $19.95{" "}
                                  <span class="small">per month</span>
                                </p>
                              </li>
                              <li class="dropdown-item" data-attr-val="peryear">
                                <p>
                                  eFax Plus $169.50{" "}
                                  <span class="small">per year</span>
                                </p>
                                <p class="font-weight-bold text-uppercase lt-green small">
                                  save $33.90
                                </p>
                              </li>
                              <li
                                class="dropdown-item"
                                data-attr-val="properyear"
                              >
                                <p>
                                  eFax Pro $199.50{" "}
                                  <span class="small">per year</span>
                                </p>
                                <p class="font-weight-bold text-uppercase lt-green small">
                                  save $39.90
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="freetrial" class="dropdown-detail">
                      <div class="one-time-setup">
                        <p class="font-weight-bold one-time-fee">
                          One-time set up fee: <del>$10.00</del>
                          <span class="lt-green text-uppercase">free</span>
                        </p>
                        <p>Send Monthly: 150 Pages</p>
                        <p>Receive Monthly: 150 Pages</p>
                        <p>Extra pages: 10¢ each (100 pages min.)</p>
                        <p class="addon-info">
                          Additional Information
                          <a
                            href="javascript:void(0);"
                            class="additional-info"
                            data-toggle="popover"
                            data-content=""
                            id="popover1"
                          >
                            <img src="images/icon-info.svg" alt="Info icon" />
                            {/* <Popup target="popover1">
                              <div class="additional-info-popup">
                                <h3 class="font-weight-bold mb-3">
                                  eFax® Plan
                                </h3>
                                <p class="mb-2">
                                  One fax page is considered a page that takes
                                  60 seconds or less to send.
                                </p>
                                <p class="mb-2">
                                  Included pages apply to U.S. usage.
                                </p>
                                <p class="mb-4">
                                  <a
                                    href="javascript:void(0);"
                                    class="font-weight-bold"
                                  >
                                    Click here
                                  </a>{" "}
                                  to check out low send-rates to numbers outside
                                  the U.S.
                                </p>
                                <span class="caret-bottom"></span>
                              </div>
                            </Popup> */}
                          </a>
                        </p>
                      </div>
                      <p class="font-weight-bold due-date">
                        Due today: <span class="lt-green">$0.00</span>
                      </p>
                      <hr class="d-none d-sm-block" />

                      <p>
                        The following charges will apply after
                        <br /> October 03, 2019.
                      </p>
                      <p class="monthly-charges">
                        Monthly recurring charges{" "}
                        <span class="font-weight-bold">$16.95 per month</span>
                      </p>
                    </div>
                    <div id="permonth" class="dropdown-detail">
                      <div class="one-time-setup">
                        <p class="font-weight-bold one-time-fee">
                          One-time set up fee: $10.00
                        </p>
                        <p>Send Monthly: 200 Pages</p>
                        <p>Receive Monthly: 200 Pages</p>
                        <p>Extra pages: 10¢ each (100 pages min.)</p>
                        <p class="addon-info">
                          Additional Information
                          <a
                            href="javascript:void(0);"
                            class="additional-info"
                            data-toggle="popover"
                            id="popover2"
                          >
                            <img src="images/icon-info.svg" alt="Info icon" />
                            {/* <Popup target="popover2">
                              <div class="additional-info-popup">
                                <h3 class="font-weight-bold mb-3">
                                  eFax® Plan
                                </h3>
                                <p class="mb-2">
                                  One fax page is considered a page that takes
                                  60 seconds or less to send.
                                </p>
                                <p class="mb-2">
                                  Included pages apply to U.S. usage.
                                </p>
                                <p class="mb-4">
                                  <a
                                    href="javascript:void(0);"
                                    class="font-weight-bold"
                                  >
                                    Click here
                                  </a>{" "}
                                  to check out low send-rates to numbers outside
                                  the U.S.
                                </p>
                                <span class="caret-bottom"></span>
                              </div>
                            </Popup> */}
                          </a>
                        </p>
                      </div>
                      <p class="due-date">
                        Monthly Recurring Charge:{" "}
                        <span class="font-weight-bold">$16.95 per month</span>
                      </p>
                      <hr class="d-none d-sm-block" />
                    </div>
                    <div id="peryear" class="dropdown-detail">
                      <div class="one-time-setup">
                        <p class="font-weight-bold one-time-fee">
                          One-time set up fee: <del>$10.00</del>
                          <span class="lt-green text-uppercase">free</span>
                        </p>
                        <p>Send Monthly: 150 Pages</p>
                        <p>Receive Monthly: 150 Pages</p>
                        <p>Extra pages: 10¢ each (100 pages min.)</p>
                        <p class="addon-info">
                          Additional Information
                          <a
                            href="javascript:void(0);"
                            class="additional-info"
                            data-toggle="popover"
                            id="popover3"
                          >
                            <img src="images/icon-info.svg" alt="Info icon" />
                            {/* <Popup target="popover3">
                              <div class="additional-info-popup">
                                <h3 class="font-weight-bold mb-3">
                                  eFax® Plan
                                </h3>
                                <p class="mb-2">
                                  One fax page is considered a page that takes
                                  60 seconds or less to send.
                                </p>
                                <p class="mb-2">
                                  Included pages apply to U.S. usage.
                                </p>
                                <p class="mb-4">
                                  <a
                                    href="javascript:void(0);"
                                    class="font-weight-bold"
                                  >
                                    Click here
                                  </a>{" "}
                                  to check out low send-rates to numbers outside
                                  the U.S.
                                </p>
                                <span class="caret-bottom"></span>
                              </div>
                            </Popup> */}
                          </a>
                        </p>
                      </div>
                      <p class="font-weight-bold due-date">
                        Due today: <span class="lt-green">$2.00</span>
                      </p>
                      <hr class="d-none d-sm-block" />
                    </div>
                    <div id="properyear" class="dropdown-detail">
                      <div class="one-time-setup">
                        <p class="font-weight-bold one-time-fee">
                          One-time set up fee: <del>$10.00</del>
                          <span class="lt-green text-uppercase">free</span>
                        </p>
                        <p>Send Monthly: 150 Pages</p>
                        <p>Receive Monthly: 150 Pages</p>
                        <p>Extra pages: 10¢ each (100 pages min.)</p>
                        <p class="addon-info">
                          Additional Information
                          <a
                            href="javascript:void(0);"
                            class="additional-info"
                            data-toggle="popover"
                            data-content='<div class="additional-info-popup"><h3 class="font-weight-bold mb-3">eFax® Plan</h3><p class="mb-2">One fax page is considered a page that takes 60 seconds or less to send.</p><p class="mb-2">Included pages apply to U.S. usage.</p><p class="mb-4"><a href="javascript:void(0);" class="font-weight-bold">Click here</a> to check out low send-rates to numbers outside the U.S.</p><span class="caret-bottom"></span></div>'
                          >
                            <img src="images/icon-info.svg" alt="Info icon" />
                          </a>
                        </p>
                      </div>
                      <p class="font-weight-bold due-date">
                        Due today: <span class="lt-green">$3.00</span>
                      </p>
                      <hr class="d-none d-sm-block" />
                    </div>
                    <p class="d-none d-sm-block font-weight-bold">
                      If you're not 100% satisfied with your service, you may
                      <a
                        class="font-weight-bold dk-blue text-underline service-popover"
                        href="javascript:void(0);"
                        data-toggle="popover"
                        data-content='<div class="additional-info-popup"><p class="mb-2">If you’re not 100% satisfied with your service, call us by phone 24/7 at
                                <a href="telto:8667618115">(866) 761-8115</a> or visit <a href="efax.com/cancel">efax.com/cancel</a></p><span class="caret-bottom"></span></div>'
                      >
                        cancel
                      </a>
                      your service at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 col-xl-4">
              <div class="row justify-content-center">
                <div class="col-mf-12 col-lg-11 offset-lg-1">
                  <div class="create-account-details">
                    <div class="setup-account">
                      <h1 class="font-weight-bold mb-3 h2">
                        Setup your account
                      </h1>
                      <h4 class="font-regular mb-4">
                        Inbound faxes will be delivered to this email address
                      </h4>
                      <div class="form-group mb-5">
                        <label for="">Email</label>
                        <input type="text" class="form-control" />
                      </div>
                      <p class="d-block d-sm-none font-weight-bold">
                        If you're not 100% satisfied with your service, you may
                        <a
                          class="font-weight-bold dk-blue text-underline service-popover"
                          href="javascript:void(0);"
                          data-toggle="popover"
                          data-content='<div class="additional-info-popup"><p class="mb-2">If you’re not 100% satisfied with your service, call us by phone 24/7 at
                                <a href="telto:8667618115">(866) 761-8115</a> or visit <a href="efax.com/cancel">efax.com/cancel</a></p><span class="caret-bottom"></span></div>'
                        >
                          cancel
                        </a>
                        your service at any time.
                      </p>
                    </div>

                    <div class="secure-payment">
                      <h2 class="font-weight-bold mb-2">
                        Enter secure payment{" "}
                        <img
                          src="images/img-secure-comodo.png"
                          class="img-fluid"
                          alt="Secure comodo image"
                        />
                      </h2>
                      <ul class="list-unstyled check-list font-italic mb-4">
                        <li>No more fax machines or paper jams</li>
                        <li>Cloud server, lifetime storage</li>
                        <li>24/7 customer support</li>
                      </ul>
                    </div>

                    <div class="form-group mb-5">
                      <label for="" class="small">
                        Name on card
                      </label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="form-group mb-5">
                      <label for="" class="small">
                        Billing address
                      </label>
                      <input type="text" class="form-control" />
                    </div>

                    <div class="credit-card-details">
                      <div class="credit-card-icons mb-4">
                        <ul class="list-unstyled list-inline">
                          <li class="list-inline-item cc-visa">
                            <img
                              src="images/icon-visa-card.svg"
                              alt="Visa Card"
                            />
                          </li>
                          <li class="list-inline-item cc-master">
                            <img
                              src="images/icon-master-card.svg"
                              alt="Master Card"
                            />
                          </li>
                          <li class="list-inline-item cc-american">
                            <img
                              src="images/icon-american-card.svg"
                              alt="American Express Card"
                            />
                          </li>
                          <li class="list-inline-item cc-discovery">
                            <img
                              src="images/icon-discovery-card.svg"
                              alt="Discovery Card"
                            />
                          </li>
                        </ul>
                      </div>
                      <div class="credit-card-titles">
                        <div class="card-number">
                          <label for="">Credit Card</label>
                        </div>

                        <div class="exp-date">
                          <label for="">Exp.</label>
                        </div>

                        <div class="cvv">
                          <a
                            class="cvv-popover"
                            href="javascript:void(0);"
                            data-toggle="popover"
                            data-content='<div class="cvv-popup"><h3 class="mb-3 ml-3">Where is my CVV located?</h3><p class="ml-3 mb-3">If you utilize a Visa, MasterCard or Discover card your CVV/CSC is located on the back of your credit card as shown below.</p><div class="cvv-popover-img text-center"><img src="images/img-cvv.svg" alt="image CVV" class="img-fluid"></div><h3 class="my-4 font-weight-light ml-3">AMEX card owners please utilize the CID number found on the front of your card.</h3></div>'
                          >
                            <img src="images/icon-info.svg" alt="Info icon" />
                          </a>
                        </div>
                      </div>
                      <div class="credit-card-info">
                        <div class="card-number">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="ccNumber"
                            />
                          </div>
                        </div>
                        <div class="exp-date">
                          <div class="form-group">
                            <input
                              type="text"
                              placeholder="MM/YY"
                              id="expDate"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="cvv">
                          <div class="form-group">
                            <input
                              type="text"
                              maxlength="4"
                              placeholder="CVV"
                              id="cvvNumber"
                              class="form-control text-center"
                            />
                          </div>
                        </div>
                        <div class="credit-card-info-dropdown">
                          <ul class="list-unstyled">
                            <li>
                              <img
                                src="images/icon-credit-card-demo.svg"
                                alt="Visa icon"
                                class="card-icon img-fluid"
                              />
                              <div class="suggestion-detail">
                                <p class="font-weight-bold">Visa ....5491</p>
                                <p class="small lt-grey">Expires on 12/21</p>
                              </div>
                            </li>

                            <li>
                              <img
                                src="images/icon-credit-card-demo.svg"
                                alt="Visa icon"
                                class="card-icon img-fluid"
                              />
                              <div class="suggestion-detail">
                                <p class="font-weight-bold">Visa ....5491</p>
                                <p class="small">Expires on 12/21</p>
                              </div>
                            </li>

                            <li class="payment-method">
                              <p class="small font-semi-bold">
                                <a href="javascript:void(0);">
                                  Manage payment methods...
                                </a>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="form-check">
                      <input
                        type="checkbox"
                        id="custom-checkbox"
                        class="form-check-input icon-x fade"
                        value="2"
                      />
                      <label for="custom-checkbox">
                        <span class="cross-mark"></span>I agree to the{" "}
                        <span class="font-weight-bold">
                          automatic renewal terms
                        </span>{" "}
                        above, including the
                        <span class="font-weight-bold">
                          $16.95 monthly charge
                        </span>{" "}
                        which will apply after October 03, 2019.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="legal-footer">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <p class="text-center">
                    By clicking "Create My Account”, I agree to the
                    <br />
                    <a
                      href="javascript:void(0);"
                      title="customer agreement"
                      class="text-underline"
                    >
                      Customer Agreement
                    </a>{" "}
                    and{" "}
                    <a href="javascript:void(0);" class="text-underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="create-account-btn">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="create-account-container text-center">
                    <a href="javascript:void(0);" class="cta red-cta disable">
                      Create My Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default connect(state => ({
  selectedNumber: selectors.getSelectedNumber(state)
}))(CreateAccount);

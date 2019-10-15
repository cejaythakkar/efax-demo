import React, { Component } from "react";
import Pano from "../../components/pano/pano";
import ButtonList from "../../containers/numberButtonList/ButtonList";
import DropdownButton from "../../components/dropdownButton/DropdownButton";
import Input from "../../components/input/Input";
import ToggleButton from "../../components/toggleButton/toggleButton";
import { getSuggestedNumbers } from "../../services/number.service";
import Steps from "../../components/steps/steps";
import cloud from "../../../assets/images/icon-cloud.svg";
import fax from "../../../assets/images/icon-fax.svg";
import closeButton from "../../../assets/images/icon-exit.svg";
import { get } from "@/app/lib/http/http-service";
import { connect } from "react-redux";
import * as Actions from "@containers/App/actions";

class ChooseNumber extends Component {
  state = {
    togglebuttonSelectedCategory: "local",
    useCurrentNumber: false,
    numbers: [
      { number: "(714) 289-2795" },
      { number: "(714) 289-9632" },
      { number: "(714) 289-3678" },
      { number: "(714) 289-2654" },
      { number: "(714) 289-7986" },
      { number: "(714) 289-1234" }
    ],
    suggestedNumbers: [],
    searchedCode: ""
  };
  ChooseNumberHandler = number => {
    this.props.setSelectedNumber(number);
    this.props.history.replace({
      pathname: "/create-account"
    });
  };
  handleClick = value => {
    this.setState({ togglebuttonSelectedCategory: value });
  };
  handleSearch = event => {
    this.setState({ searchedCode: event.target.value }, () => {
      if (this.state.searchedCode.length < 3) {
        this.setState({ suggestedNumbers: [] });
        return;
      }
      this.setState({ suggestedNumbers: getSuggestedNumbers() });
    });
  };
  render() {
    const number = "(310) 222-1313";
    return (
      <>
        <Pano
          labelText="View, send and receive your faxes quickly and securely, all on the cloud"
          imageSrc={cloud}
        ></Pano>
        <div className="choose-number-pg">
          <div className="container">
            <Steps></Steps>
            {this.state.useCurrentNumber ? (
              <div id="portNumberDiv" className="port-number">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2 className="text-center mb-5 font-semi-bold">
                      Enter your current fax number
                    </h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-6 col-lg-5">
                    <div className="port-number-form mx-auto">
                      <input
                        type="text"
                        id="searchPortfield"
                        className="form-control justify-content-between"
                        placeholder=""
                      />
                      <img
                        src="images/icon-success.svg"
                        className="icon-success"
                        style={{ display: "none" }}
                      />
                      <a
                        href="javascript:void(0);"
                        className="icon-close"
                        style={{ display: "none" }}
                      >
                        <img src="images/icon-exit.svg" alt="icon close" />
                      </a>
                    </div>
                    <p className="text-center lt-green small mb-5">
                      Good news, we can port your number to eFax!
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-11 col-md-8 col-lg-6 mb-5">
                    <p className="text-center">
                      After you setup your account, you will be assigned a free
                      temporary local eFax number to start receiving faxes
                      immediately.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-5 col-lg-4 col-xl-3 text-center">
                    <a
                      href="create-account.html"
                      className="cta cta-red cta-lg cta-block mb-5"
                    >
                      Continue
                    </a>
                    <a
                      className="font-bold dk-grey"
                      id="chooseNumberlink"
                      onClick={() => this.setState({ useCurrentNumber: false })}
                    >
                      or choose a local or toll free number
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div id="chooseNumberDiv">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2 className="text-center font-semi-bold">
                      Choose your fax number
                    </h2>
                  </div>
                </div>

                <div className="choose-number-tabs">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-5 col-lg-4">
                      <ToggleButton
                        handleClick={this.handleClick}
                        selectedValue={this.state.togglebuttonSelectedCategory}
                      ></ToggleButton>
                    </div>
                  </div>

                  <div className="tab-content">
                    {this.state.togglebuttonSelectedCategory === "toll free" &&
                    !this.state.useCurrentNumber ? (
                      <div id="tollfree" className="toll-free-number mt-4">
                        <div className="row justify-content-center">
                          <div className="col-12 col-md-7 col-lg-5 col-xl-4 row justify-content-center">
                            <DropdownButton></DropdownButton>
                            <ButtonList
                              numbers={this.state.numbers}
                            ></ButtonList>
                            <p className="text-center btn-refresh">
                              <a href="javascript:void(0);">
                                <img src="images/icon-refresh.svg" /> Refresh
                                list
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div id="local" className="tab-pane active local-number">
                        <div className="row justify-content-center">
                          <div className="col-12 col-md-6 col-lg-5">
                            <p className="mb-4 text-center">
                              We found a number that’s available!
                            </p>
                            <p className="m-b-25 text-center">
                              <a
                                onClick={() => this.ChooseNumberHandler(number)}
                                className="cta cta-lg cta-red cta-block"
                              >
                                Choose {number}
                              </a>
                            </p>
                            <p className="font-bold m-b-25 text-center">
                              <img
                                className="m-r-10"
                                src={fax}
                                alt="I’ll use my current fax number"
                              />
                              <a
                                className="dk-grey"
                                id="currentNumberlink"
                                onClick={() => {
                                  console.log("in here");
                                  this.setState({ useCurrentNumber: true });
                                }}
                              >
                                I’ll use my current fax number
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="lt-grey-bg border-top search-numbers-con">
                          <div className="row justify-content-center">
                            <div className="col-12 col-md-6 col-lg-5">
                              <p className="mb-4 text-center">
                                Search for more available numbers
                              </p>
                              <form className="search-numbers mx-auto mb-5">
                                <Input
                                  placeholder="City or area code"
                                  handleChange={this.handleSearch}
                                  value={this.state.searchedCode}
                                />
                                {this.state.suggestedNumbers.length ? (
                                  <a
                                    href="javascript:void(0);"
                                    className="icon-close"
                                    onClick={() =>
                                      this.setState({
                                        suggestedNumbers: [],
                                        searchedCode: ""
                                      })
                                    }
                                  >
                                    <img src={closeButton} alt="icon close" />
                                  </a>
                                ) : null}
                              </form>
                            </div>
                          </div>
                          {this.state.suggestedNumbers.length ? (
                            <div
                              id="searchResult"
                              className="search-result-con"
                            >
                              <div className="row justify-content-center">
                                <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                                  <ButtonList
                                    numbers={this.state.suggestedNumbers}
                                  />
                                  <p className="text-center btn-refresh">
                                    <a href="javascript:void(0);">
                                      <img src="images/icon-refresh.svg" />{" "}
                                      Refresh list
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  null,
  {
    setSelectedNumber: Actions.setSelectedNumber
  }
)(ChooseNumber);

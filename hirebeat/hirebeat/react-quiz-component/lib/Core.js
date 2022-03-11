"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marked = _interopRequireDefault(require("marked"));

var _dompurify = _interopRequireDefault(require("dompurify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Core = function Core(_ref) {
  var questions = _ref.questions,
      appLocale = _ref.appLocale,
      showDefaultResult = _ref.showDefaultResult,
      onComplete = _ref.onComplete,
      customResultPage = _ref.customResultPage,
      showInstantFeedback = _ref.showInstantFeedback,
      continueTillCorrect = _ref.continueTillCorrect;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      incorrectAnswer = _useState2[0],
      setIncorrectAnswer = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      correctAnswer = _useState4[0],
      setCorrectAnswer = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showNextQuestionButton = _useState6[0],
      setShowNextQuestionButton = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      endQuiz = _useState8[0],
      setEndQuiz = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      currentQuestionIndex = _useState10[0],
      setCurrentQuestionIndex = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      buttons = _useState12[0],
      setButtons = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      buttonClasses = _useState14[0],
      setButtonClasses = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      correct = _useState16[0],
      setCorrect = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      incorrect = _useState18[0],
      setIncorrect = _useState18[1];

  var _useState19 = (0, _react.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      userInput = _useState20[0],
      setUserInput = _useState20[1];

  var _useState21 = (0, _react.useState)('all'),
      _useState22 = _slicedToArray(_useState21, 2),
      filteredValue = _useState22[0],
      setFilteredValue = _useState22[1];

  var _useState23 = (0, _react.useState)(1),
      _useState24 = _slicedToArray(_useState23, 2),
      userAttempt = _useState24[0],
      setUserAttempt = _useState24[1];

  var _useState25 = (0, _react.useState)(true),
      _useState26 = _slicedToArray(_useState25, 2),
      showDefaultResultState = _useState26[0],
      setShowDefaultResult = _useState26[1];

  var _useState27 = (0, _react.useState)(undefined),
      _useState28 = _slicedToArray(_useState27, 2),
      answerSelectionTypeState = _useState28[0],
      setAnswerSelectionType = _useState28[1];

  var _useState29 = (0, _react.useState)(0),
      _useState30 = _slicedToArray(_useState29, 2),
      totalPoints = _useState30[0],
      setTotalPoints = _useState30[1];

  var _useState31 = (0, _react.useState)(0),
      _useState32 = _slicedToArray(_useState31, 2),
      correctPoints = _useState32[0],
      setCorrectPoints = _useState32[1];

  var _useState33 = (0, _react.useState)(questions[currentQuestionIndex]),
      _useState34 = _slicedToArray(_useState33, 2),
      question = _useState34[0],
      setQuestion = _useState34[1];

  var _useState35 = (0, _react.useState)(undefined),
      _useState36 = _slicedToArray(_useState35, 2),
      questionSummary = _useState36[0],
      setQuestionSummary = _useState36[1];

  (0, _react.useEffect)(function () {
    setShowDefaultResult(showDefaultResult !== undefined ? showDefaultResult : true);
  }, [showDefaultResult]);
  (0, _react.useEffect)(function () {
    setQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);
  (0, _react.useEffect)(function () {
    var answerSelectionType = question.answerSelectionType; // Default single to avoid code breaking due to automatic version upgrade

    setAnswerSelectionType(answerSelectionType || 'single');
  }, [question, currentQuestionIndex]);
  (0, _react.useEffect)(function () {
    if (endQuiz) {
      var totalPointsTemp = 0;
      var correctPointsTemp = 0;

      for (var i = 0; i < questions.length; i++) {
        var point = questions[i].point || 0;

        if (typeof point === 'string' || point instanceof String) {
          point = parseInt(point);
        }

        totalPointsTemp = totalPointsTemp + point;

        if (correct.includes(i)) {
          correctPointsTemp = correctPointsTemp + point;
        }
      }

      setTotalPoints(totalPointsTemp);
      setCorrectPoints(correctPointsTemp);
    }
  }, [endQuiz]);
  (0, _react.useEffect)(function () {
    setQuestionSummary({
      numberOfQuestions: questions.length,
      numberOfCorrectAnswers: correct.length,
      numberOfIncorrectAnswers: incorrect.length,
      questions: questions,
      userInput: userInput,
      totalPoints: totalPoints,
      correctPoints: correctPoints
    });
  }, [totalPoints, correctPoints]);
  (0, _react.useEffect)(function () {
    if (endQuiz && onComplete !== undefined && questionSummary !== undefined) {
      onComplete(questionSummary);
    }
  }, [endQuiz, questionSummary]);
  (0, _react.useEffect)(function () {
    if (endQuiz && !showDefaultResultState && customResultPage !== undefined && questionSummary !== undefined) {
      customResultPage(questionSummary);
    }
  }, [endQuiz, questionSummary]);

  var checkAnswer = function checkAnswer(index, correctAnswer, answerSelectionType) {
    if (answerSelectionType == 'single') {
      if (userInput[currentQuestionIndex] == undefined) {
        userInput.push(index);
      }

      if (index == correctAnswer) {
        if (incorrect.indexOf(currentQuestionIndex) < 0 && correct.indexOf(currentQuestionIndex) < 0) {
          correct.push(currentQuestionIndex);
        }

        var disabledAll = {
          0: {
            disabled: true
          },
          1: {
            disabled: true
          },
          2: {
            disabled: true
          },
          3: {
            disabled: true
          }
        };
        setButtons(function (prevState) {
          return _objectSpread({}, prevState, disabledAll, _defineProperty({}, index - 1, {
            className: index == correctAnswer ? "correct" : "incorrect"
          }));
        });
        setCorrectAnswer(true);
        setIncorrectAnswer(false);
        setCorrect(correct);
        setShowNextQuestionButton(true);
      } else {
        if (correct.indexOf(currentQuestionIndex) < 0 && incorrect.indexOf(currentQuestionIndex) < 0) {
          incorrect.push(currentQuestionIndex);
        }

        if (continueTillCorrect) {
          setButtons(function (prevState) {
            return Object.assign({}, prevState, _defineProperty({}, index - 1, {
              disabled: !prevState[index - 1]
            }));
          });
        } else {
          var _disabledAll = {
            0: {
              disabled: true
            },
            1: {
              disabled: true
            },
            2: {
              disabled: true
            },
            3: {
              disabled: true
            }
          };
          setButtons(function (prevState) {
            return Object.assign({}, prevState, _objectSpread({}, _disabledAll, _defineProperty({}, index - 1, {
              className: index == correctAnswer ? "correct" : "incorrect"
            })));
          });
          setShowNextQuestionButton(true);
        }

        setIncorrectAnswer(true);
        setCorrectAnswer(false);
        setIncorrect(incorrect);
      }
    } else {
      var maxNumberOfMultipleSelection = correctAnswer.length;

      if (userInput[currentQuestionIndex] == undefined) {
        userInput[currentQuestionIndex] = [];
      }

      if (userInput[currentQuestionIndex].length < maxNumberOfMultipleSelection) {
        userInput[currentQuestionIndex].push(index);

        if (correctAnswer.includes(index)) {
          if (userInput[currentQuestionIndex].length <= maxNumberOfMultipleSelection) {
            setButtons(function (prevState) {
              return _objectSpread({}, prevState, _defineProperty({}, index - 1, {
                disabled: !prevState[index - 1],
                className: correctAnswer.includes(index) ? "correct" : "incorrect"
              }));
            });
          }
        } else {
          if (userInput[currentQuestionIndex].length <= maxNumberOfMultipleSelection) {
            setButtons(function (prevState) {
              return _objectSpread({}, prevState, _defineProperty({}, index - 1, {
                className: correctAnswer.includes(index) ? "correct" : "incorrect"
              }));
            });
          }
        }
      }

      if (maxNumberOfMultipleSelection == userAttempt) {
        var cnt = 0;

        for (var i = 0; i < correctAnswer.length; i++) {
          if (userInput[currentQuestionIndex].includes(correctAnswer[i])) {
            cnt++;
          }
        }

        if (cnt === maxNumberOfMultipleSelection) {
          correct.push(currentQuestionIndex);
          setCorrectAnswer(true);
          setIncorrectAnswer(false);
          setCorrect(correct);
          setShowNextQuestionButton(true);
          setUserAttempt(1);
        } else {
          incorrect.push(currentQuestionIndex);
          setIncorrectAnswer(true);
          setCorrectAnswer(false);
          setIncorrect(incorrect);
          setShowNextQuestionButton(true);
          setUserAttempt(1);
        }
      } else {
        if (!showNextQuestionButton) {
          setUserInput(userInput);
          setUserAttempt(userAttempt + 1);
        }
      }
    }
  };

  var nextQuestion = function nextQuestion(currentQuestionIndex) {
    setIncorrectAnswer(false);
    setCorrectAnswer(false);
    setShowNextQuestionButton(false);
    setButtons({});

    if (currentQuestionIndex + 1 == questions.length) {
      setEndQuiz(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  var renderMessageforCorrectAnswer = function renderMessageforCorrectAnswer(question) {
    var defaultMessage = 'You are correct. Please click Next to continue.';
    return question.messageForCorrectAnswer || defaultMessage;
  };

  var renderMessageforIncorrectAnswer = function renderMessageforIncorrectAnswer(question) {
    var defaultMessage = 'Incorrect answer. Please try again.';
    return question.messageForIncorrectAnswer || defaultMessage;
  };

  var renderExplanation = function renderExplanation(question, isResultPage) {
    var explanation = question.explanation;

    if (!explanation) {
      return null;
    }

    if (isResultPage) {
      return _react.default.createElement("div", {
        className: "explanation"
      }, explanation);
    }

    return _react.default.createElement("div", null, _react.default.createElement("br", null), explanation);
  };

  var handleChange = function handleChange(event) {
    setFilteredValue(event.target.value);
  };

  var renderQuizResultFilter = function renderQuizResultFilter() {
    return _react.default.createElement("div", {
      className: "quiz-result-filter"
    }, _react.default.createElement("select", {
      value: filteredValue,
      onChange: handleChange
    }, _react.default.createElement("option", {
      value: "all"
    }, appLocale.resultFilterAll), _react.default.createElement("option", {
      value: "correct"
    }, appLocale.resultFilterCorrect), _react.default.createElement("option", {
      value: "incorrect"
    }, appLocale.resultFilterIncorrect)));
  };

  var renderAnswerInResult = function renderAnswerInResult(question, userInputIndex) {
    var answers = question.answers,
        correctAnswer = question.correctAnswer,
        questionType = question.questionType;
    var answerSelectionType = question.answerSelectionType;
    var answerBtnCorrectClassName;
    var answerBtnIncorrectClassName; // Default single to avoid code breaking due to automatic version upgrade

    answerSelectionType = answerSelectionType || 'single';
    return answers.map(function (answer, index) {
      if (answerSelectionType == 'single') {
        answerBtnCorrectClassName = index + 1 == correctAnswer ? 'correct' : '';
        answerBtnIncorrectClassName = userInputIndex != correctAnswer && index + 1 == userInputIndex ? 'incorrect' : '';
      } else {
        answerBtnCorrectClassName = correctAnswer.includes(index + 1) ? 'correct' : '';
        answerBtnIncorrectClassName = !correctAnswer.includes(index + 1) && userInputIndex.includes(index + 1) ? 'incorrect' : '';
      }

      return _react.default.createElement("div", {
        key: index
      }, _react.default.createElement("button", {
        disabled: true,
        className: "answerBtn btn " + answerBtnCorrectClassName + answerBtnIncorrectClassName
      }, questionType == 'text' && _react.default.createElement("span", null, answer), questionType == 'photo' && _react.default.createElement("img", {
        src: answer
      })));
    });
  };

  var renderQuizResultQuestions = (0, _react.useCallback)(function () {
    var filteredQuestions;
    var filteredUserInput;

    if (filteredValue !== 'all') {
      if (filteredValue === 'correct') {
        filteredQuestions = questions.filter(function (question, index) {
          return correct.indexOf(index) != -1;
        });
        filteredUserInput = userInput.filter(function (input, index) {
          return correct.indexOf(index) != -1;
        });
      } else {
        filteredQuestions = questions.filter(function (question, index) {
          return incorrect.indexOf(index) != -1;
        });
        filteredUserInput = userInput.filter(function (input, index) {
          return incorrect.indexOf(index) != -1;
        });
      }
    }

    return (filteredQuestions ? filteredQuestions : questions).map(function (question, index) {
      var userInputIndex = filteredUserInput ? filteredUserInput[index] : userInput[index]; // Default single to avoid code breaking due to automatic version upgrade

      var answerSelectionType = question.answerSelectionType || 'single';
      return _react.default.createElement("div", {
        className: "result-answer-wrapper",
        key: index + 1
      }, _react.default.createElement("h3", {
        dangerouslySetInnerHTML: rawMarkup("Q".concat(question.questionIndex, ": ").concat(question.question))
      }), question.questionPic && _react.default.createElement("img", {
        src: question.questionPic
      }), renderTags(answerSelectionType, question.correctAnswer.length), _react.default.createElement("div", {
        className: "result-answer"
      }, renderAnswerInResult(question, userInputIndex)), renderExplanation(question, true));
    });
  }, [endQuiz, filteredValue]);

  var rawMarkup = function rawMarkup(data) {
    var sanitizer = _dompurify.default.sanitize;
    var rawMarkup = (0, _marked.default)(sanitizer(data));
    return {
      __html: rawMarkup
    };
  };

  var renderAnswers = function renderAnswers(question, buttons) {
    var answers = question.answers,
        correctAnswer = question.correctAnswer,
        questionType = question.questionType;
    var answerSelectionType = question.answerSelectionType; // Default single to avoid code breaking due to automatic version upgrade

    answerSelectionType = answerSelectionType || 'single';
    return answers.map(function (answer, index) {
      if (buttons[index] != undefined) {
        return _react.default.createElement("button", {
          key: index,
          disabled: buttons[index].disabled || false,
          className: "".concat(buttons[index].className, " answerBtn btn"),
          onClick: function onClick() {
            return checkAnswer(index + 1, correctAnswer, answerSelectionType);
          }
        }, questionType == 'text' && _react.default.createElement("span", null, answer), questionType == 'photo' && _react.default.createElement("img", {
          src: answer
        }));
      } else {
        return _react.default.createElement("button", {
          key: index,
          onClick: function onClick() {
            return checkAnswer(index + 1, correctAnswer, answerSelectionType);
          },
          className: "answerBtn btn"
        }, questionType == 'text' && answer, questionType == 'photo' && _react.default.createElement("img", {
          src: answer
        }));
      }
    });
  };

  var renderTags = function renderTags(answerSelectionType, numberOfSelection) {
    var singleSelectionTagText = appLocale.singleSelectionTagText,
        multipleSelectionTagText = appLocale.multipleSelectionTagText,
        pickNumberOfSelection = appLocale.pickNumberOfSelection;
    return _react.default.createElement("div", {
      className: "tag-container"
    }, answerSelectionType === 'single' && _react.default.createElement("span", {
      className: "single selection-tag"
    }, singleSelectionTagText), answerSelectionType === 'multiple' && _react.default.createElement("span", {
      className: "multiple selection-tag"
    }, multipleSelectionTagText), _react.default.createElement("span", {
      className: "number-of-selection"
    }, pickNumberOfSelection.replace("<numberOfSelection>", numberOfSelection)));
  };

  var renderResult = function renderResult() {
    return _react.default.createElement("div", {
      className: "card-body"
    }, _react.default.createElement("h2", null, appLocale.resultPageHeaderText.replace("<correctIndexLength>", correct.length).replace("<questionLength>", questions.length)), _react.default.createElement("h2", null, appLocale.resultPagePoint.replace("<correctPoints>", correctPoints).replace("<totalPoints>", totalPoints)), _react.default.createElement("br", null), renderQuizResultFilter(), renderQuizResultQuestions());
  };

  return _react.default.createElement("div", {
    className: "questionWrapper"
  }, !endQuiz && _react.default.createElement("div", {
    className: "questionWrapperBody"
  }, _react.default.createElement("div", {
    className: "questionModal"
  }, incorrectAnswer && showInstantFeedback && _react.default.createElement("div", {
    className: "alert incorrect"
  }, renderMessageforIncorrectAnswer(question)), correctAnswer && showInstantFeedback && _react.default.createElement("div", {
    className: "alert correct"
  }, renderMessageforCorrectAnswer(question), renderExplanation(question, false))), _react.default.createElement("div", null, appLocale.question, " ", currentQuestionIndex + 1, ":"), _react.default.createElement("h3", {
    dangerouslySetInnerHTML: rawMarkup(question && question.question)
  }), question && question.questionPic && _react.default.createElement("img", {
    src: question.questionPic
  }), question && renderTags(answerSelectionTypeState, question.correctAnswer.length), question && renderAnswers(question, buttons), showNextQuestionButton && _react.default.createElement("div", null, _react.default.createElement("button", {
    onClick: function onClick() {
      return nextQuestion(currentQuestionIndex);
    },
    className: "nextQuestionBtn btn"
  }, appLocale.nextQuestionBtn))), endQuiz && showDefaultResultState && customResultPage === undefined && renderResult());
};

Core.propTypes = {
  questions: _propTypes.default.array,
  showDefaultResult: _propTypes.default.bool,
  onComplete: _propTypes.default.func,
  customResultPage: _propTypes.default.func,
  showInstantFeedback: _propTypes.default.bool,
  continueTillCorrect: _propTypes.default.bool,
  appLocale: _propTypes.default.object
};
var _default = Core;
exports.default = _default;
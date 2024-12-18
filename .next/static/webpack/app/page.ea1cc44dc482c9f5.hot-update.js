"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/data-visualization/ai-copilot.tsx":
/*!**********************************************************!*\
  !*** ./src/components/data-visualization/ai-copilot.tsx ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AICopilot: () => (/* binding */ AICopilot)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/x */ \"(app-pages-browser)/./node_modules/@ant-design/x/es/useXAgent/index.js\");\n/* harmony import */ var _ant_design_x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/x */ \"(app-pages-browser)/./node_modules/@ant-design/x/es/useXChat/index.js\");\n/* harmony import */ var _ant_design_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/x */ \"(app-pages-browser)/./node_modules/@ant-design/x/es/bubble/index.js\");\n/* harmony import */ var _ant_design_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/x */ \"(app-pages-browser)/./node_modules/@ant-design/x/es/sender/index.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openai */ \"(app-pages-browser)/./node_modules/openai/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ AICopilot auto */ \nvar _s = $RefreshSig$();\n\n\n\n// 初始化 OpenAI 客户端\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    baseURL: 'https://aigc.sankuai.com/v1/openai/native/chat/completions',\n    apiKey: '1797875959782527043',\n    defaultHeaders: {\n        'Content-Type': 'application/json'\n    },\n    defaultQuery: {\n        'app-id': '1797875959782527043'\n    },\n    dangerouslyAllowBrowser: true\n});\nfunction AICopilot(param) {\n    let { data } = param;\n    _s();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [agent] = (0,_ant_design_x__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        request: {\n            \"AICopilot.useXAgent\": async (info, callbacks)=>{\n                const { messages, message } = info;\n                const { onUpdate, onSuccess, onError } = callbacks;\n                let content = '';\n                setErrorMessage(null);\n                try {\n                    // 验证输入消息\n                    if (!(message === null || message === void 0 ? void 0 : message.trim())) {\n                        throw new Error('请输入有效的问题');\n                    }\n                    console.log('发送请求到 OpenAI:', {\n                        message,\n                        historyLength: messages.length,\n                        data: data.rows.length\n                    });\n                    // 构建系统提示词\n                    const systemPrompt = \"你是一个专业的数据分析助手。你将帮助用户分析用户流转数据。\\n当前数据包含以下指标：\\n\".concat(data.rows.map({\n                        \"AICopilot.useXAgent\": (row)=>\"\".concat(row.metric_name, \": \").concat(row.metric_value)\n                    }[\"AICopilot.useXAgent\"]).join('\\n'), \"\\n\\n主要指标说明：\\n- current_user: 当前用户数（今日活跃且过去7天内至少活跃1次的用户）\\n- new_user: 新用户数（首次使用应用的用户）\\n- reactivated_user: 重新激活用户数（首次回访的用户）\\n- resurrected_user: 复活用户数（首日回访的用户）\\n- at_risk_waus: 周活跃用户流失风险数（今日不活跃，但过去1-6天活跃的用户）\\n- at_risk_maus: 月活跃用户流失风险数（今日不活跃，过去1-6天不活跃，但过去7-29天活跃的用户）\\n- dead_users: 流失用户数（今日及过去29天不活跃的用户）\\n\\n转化率指标：\\n- RURR: 重新激活用户留存率\\n- SURR: 复活用户留存率\\n- CURR: 当前用户留存率\\n- NURR: 新用户留存率\\n- iWAURR: 周活跃用户挽回率\\n- iMAURR: 月活跃用户挽回率\\n\\n请根据这些数据，帮助用户分析用户流转情况，提供数据洞见。\");\n                    // 确保每个消息都有正确的角色和内容\n                    const formattedMessages = messages.filter({\n                        \"AICopilot.useXAgent.formattedMessages\": (msg)=>{\n                            var _msg_message;\n                            return (_msg_message = msg.message) === null || _msg_message === void 0 ? void 0 : _msg_message.trim();\n                        }\n                    }[\"AICopilot.useXAgent.formattedMessages\"]).map({\n                        \"AICopilot.useXAgent.formattedMessages\": (msg)=>({\n                                role: msg.role === 'assistant' ? 'assistant' : 'user',\n                                content: msg.message.trim()\n                            })\n                    }[\"AICopilot.useXAgent.formattedMessages\"]);\n                    const requestMessages = [\n                        {\n                            role: 'system',\n                            content: systemPrompt\n                        },\n                        ...formattedMessages,\n                        {\n                            role: 'user',\n                            content: message.trim()\n                        }\n                    ];\n                    // 验证所有消息\n                    const invalidMessage = requestMessages.find({\n                        \"AICopilot.useXAgent.invalidMessage\": (msg)=>!msg.content\n                    }[\"AICopilot.useXAgent.invalidMessage\"]);\n                    if (invalidMessage) {\n                        throw new Error('消息内容不能为空');\n                    }\n                    console.log('OpenAI 请求消息:', JSON.stringify(requestMessages, null, 2));\n                    // 创建对话流\n                    const response = await openai.chat.completions.create({\n                        model: 'gpt-4o-mini',\n                        messages: requestMessages,\n                        stream: true,\n                        temperature: 0.7,\n                        max_tokens: 1000\n                    });\n                    console.log('OpenAI 流创建成功');\n                    // 处理流式响应\n                    for await (const chunk of response){\n                        var _chunk_choices__delta, _chunk_choices_;\n                        const delta = ((_chunk_choices_ = chunk.choices[0]) === null || _chunk_choices_ === void 0 ? void 0 : (_chunk_choices__delta = _chunk_choices_.delta) === null || _chunk_choices__delta === void 0 ? void 0 : _chunk_choices__delta.content) || '';\n                        content += delta;\n                        onUpdate(content);\n                    }\n                    console.log('OpenAI 响应完成:', {\n                        contentLength: content.length\n                    });\n                    onSuccess(content);\n                } catch (error) {\n                    console.error('AI 响应错误:', error);\n                    const errorMsg = error instanceof Error ? \"\".concat(error.name, \": \").concat(error.message) : '未知错误';\n                    setErrorMessage(\"请求失败: \".concat(errorMsg));\n                    onError();\n                }\n            }\n        }[\"AICopilot.useXAgent\"]\n    });\n    const { messages, onRequest } = (0,_ant_design_x__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        agent,\n        initialMessages: [\n            {\n                id: '1',\n                role: 'assistant',\n                message: '你好！我是你的数据分析助手。我可以帮你分析用户流转数据，回答你的问题，并提供数据洞见。\\n\\n你可以问我：\\n1. 当前用户流失情况如何？\\n2. 新用户留存率是多少？\\n3. 用户活跃度趋势分析\\n4. 如何提高用户留存率？'\n            }\n        ]\n    });\n    const items = messages.map((param)=>{\n        let { message, id } = param;\n        return {\n            key: id,\n            content: message || ''\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 bg-blue-50 border-b\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold\",\n                        children: \"AI 数据分析助手\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-600\",\n                        children: \"我可以帮你分析用户流转数据，提供数据洞见\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 overflow-auto p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_x__WEBPACK_IMPORTED_MODULE_5__[\"default\"].List, {\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this),\n                    errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm\",\n                        children: errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border-t\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_x__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    onSubmit: onRequest,\n                    placeholder: \"输入你的问题...\",\n                    sendButtonProps: {\n                        children: '发送'\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                    lineNumber: 154,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, this);\n}\n_s(AICopilot, \"etTykMdbxgItuQ1Y+nMeInURZxc=\", false, function() {\n    return [\n        _ant_design_x__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _ant_design_x__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = AICopilot;\nvar _c;\n$RefreshReg$(_c, \"AICopilot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RhdGEtdmlzdWFsaXphdGlvbi9haS1jb3BpbG90LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVnQztBQUNtQztBQUN4QztBQUczQixpQkFBaUI7QUFDakIsTUFBTU0sU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQztJQUN4QkUsU0FBUztJQUNUQyxRQUFRO0lBQ1JDLGdCQUFnQjtRQUNkLGdCQUFnQjtJQUNsQjtJQUNBQyxjQUFjO1FBQ1osVUFBVTtJQUNaO0lBQ0FDLHlCQUF5QjtBQUMzQjtBQU1PLFNBQVNDLFVBQVUsS0FBd0I7UUFBeEIsRUFBRUMsSUFBSSxFQUFrQixHQUF4Qjs7SUFDeEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQWdCO0lBRWhFLE1BQU0sQ0FBQ2dCLE1BQU0sR0FBR1oseURBQVNBLENBQUM7UUFDeEJhLE9BQU87bUNBQUUsT0FBT0MsTUFBTUM7Z0JBQ3BCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUUsR0FBR0g7Z0JBQzlCLE1BQU0sRUFBRUksUUFBUSxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRSxHQUFHTDtnQkFFekMsSUFBSU0sVUFBVTtnQkFDZFYsZ0JBQWdCO2dCQUVoQixJQUFJO29CQUNGLFNBQVM7b0JBQ1QsSUFBSSxFQUFDTSxvQkFBQUEsOEJBQUFBLFFBQVNLLElBQUksS0FBSTt3QkFDcEIsTUFBTSxJQUFJQyxNQUFNO29CQUNsQjtvQkFFQUMsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQjt3QkFDM0JSO3dCQUNBUyxlQUFlVixTQUFTVyxNQUFNO3dCQUM5QmxCLE1BQU1BLEtBQUttQixJQUFJLENBQUNELE1BQU07b0JBQ3hCO29CQUVBLFVBQVU7b0JBQ1YsTUFBTUUsZUFBZSwrQ0FFZ0QsT0FBM0VwQixLQUFLbUIsSUFBSSxDQUFDRSxHQUFHOytDQUFDQyxDQUFBQSxNQUFPLEdBQXVCQSxPQUFwQkEsSUFBSUMs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QkFBSUMsV0FBVTswQkFDYiw0RUFBQ25FLHFEQUFNQTtvQkFDTHVFLFVBQVVWO29CQUNWVyxhQUFZO29CQUNaQyxpQkFBaUI7d0JBQ2ZDLFVBQVU7b0JBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0EzSWdCaEU7O1FBR0VSLHFEQUFTQTtRQWlHT0QscURBQVFBOzs7S0FwRzFCUyIsInNvdXJjZXMiOlsiL1VzZXJzL3dpbGwvQ29kZS9jdXJyLXZpcy13ZWIvc3JjL2NvbXBvbmVudHMvZGF0YS12aXN1YWxpemF0aW9uL2FpLWNvcGlsb3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnViYmxlLCBTZW5kZXIsIHVzZVhDaGF0LCB1c2VYQWdlbnQgfSBmcm9tICdAYW50LWRlc2lnbi94J1xuaW1wb3J0IE9wZW5BSSBmcm9tICdvcGVuYWknXG5pbXBvcnQgeyBDU1ZEYXRhIH0gZnJvbSAnQC90eXBlcy9jc3YnXG5cbi8vIOWIneWni+WMliBPcGVuQUkg5a6i5oi356uvXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8vYWlnYy5zYW5rdWFpLmNvbS92MS9vcGVuYWkvbmF0aXZlL2NoYXQvY29tcGxldGlvbnMnLFxuICBhcGlLZXk6ICcxNzk3ODc1OTU5NzgyNTI3MDQzJyxcbiAgZGVmYXVsdEhlYWRlcnM6IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9LFxuICBkZWZhdWx0UXVlcnk6IHtcbiAgICAnYXBwLWlkJzogJzE3OTc4NzU5NTk3ODI1MjcwNDMnLFxuICB9LFxuICBkYW5nZXJvdXNseUFsbG93QnJvd3NlcjogdHJ1ZSxcbn0pXG5cbmludGVyZmFjZSBBSUNvcGlsb3RQcm9wcyB7XG4gIGRhdGE6IENTVkRhdGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFJQ29waWxvdCh7IGRhdGEgfTogQUlDb3BpbG90UHJvcHMpIHtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgY29uc3QgW2FnZW50XSA9IHVzZVhBZ2VudCh7XG4gICAgcmVxdWVzdDogYXN5bmMgKGluZm8sIGNhbGxiYWNrcykgPT4ge1xuICAgICAgY29uc3QgeyBtZXNzYWdlcywgbWVzc2FnZSB9ID0gaW5mb1xuICAgICAgY29uc3QgeyBvblVwZGF0ZSwgb25TdWNjZXNzLCBvbkVycm9yIH0gPSBjYWxsYmFja3NcblxuICAgICAgbGV0IGNvbnRlbnQgPSAnJ1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKG51bGwpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIOmqjOivgei+k+WFpea2iOaBr1xuICAgICAgICBpZiAoIW1lc3NhZ2U/LnRyaW0oKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcign6K+36L6T5YWl5pyJ5pWI55qE6Zeu6aKYJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCflj5HpgIHor7fmsYLliLAgT3BlbkFJOicsIHtcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgIGhpc3RvcnlMZW5ndGg6IG1lc3NhZ2VzLmxlbmd0aCxcbiAgICAgICAgICBkYXRhOiBkYXRhLnJvd3MubGVuZ3RoXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g5p6E5bu657O757uf5o+Q56S66K+NXG4gICAgICAgIGNvbnN0IHN5c3RlbVByb21wdCA9IGDkvaDmmK/kuIDkuKrkuJPkuJrnmoTmlbDmja7liIbmnpDliqnmiYvjgILkvaDlsIbluK7liqnnlKjmiLfliIbmnpDnlKjmiLfmtYHovazmlbDmja7jgIJcbuW9k+WJjeaVsOaNruWMheWQq+S7peS4i+aMh+agh++8mlxuJHtkYXRhLnJvd3MubWFwKHJvdyA9PiBgJHtyb3cubWV0cmljX25hbWV9OiAke3Jvdy5tZXRyaWNfdmFsdWV9YCkuam9pbignXFxuJyl9XG5cbuS4u+imgeaMh+agh+ivtOaYju+8mlxuLSBjdXJyZW50X3VzZXI6IOW9k+WJjeeUqOaIt+aVsO+8iOS7iuaXpea0u+i3g+S4lOi/h+WOuzflpKnlhoXoh7PlsJHmtLvot4Mx5qyh55qE55So5oi377yJXG4tIG5ld191c2VyOiDmlrDnlKjmiLfmlbDvvIjpppbmrKHkvb/nlKjlupTnlKjnmoTnlKjmiLfvvIlcbi0gcmVhY3RpdmF0ZWRfdXNlcjog6YeN5paw5r+A5rS755So5oi35pWw77yI6aaW5qyh5Zue6K6/55qE55So5oi377yJXG4tIHJlc3VycmVjdGVkX3VzZXI6IOWkjea0u+eUqOaIt+aVsO+8iOmmluaXpeWbnuiuv+eahOeUqOaIt++8iVxuLSBhdF9yaXNrX3dhdXM6IOWRqOa0u+i3g+eUqOaIt+a1geWksemjjumZqeaVsO+8iOS7iuaXpeS4jea0u+i3g++8jOS9hui/h+WOuzEtNuWkqea0u+i3g+eahOeUqOaIt++8iVxuLSBhdF9yaXNrX21hdXM6IOaciOa0u+i3g+eUqOaIt+a1geWksemjjumZqeaVsO+8iOS7iuaXpeS4jea0u+i3g++8jOi/h+WOuzEtNuWkqeS4jea0u+i3g++8jOS9hui/h+WOuzctMjnlpKnmtLvot4PnmoTnlKjmiLfvvIlcbi0gZGVhZF91c2Vyczog5rWB5aSx55So5oi35pWw77yI5LuK5pel5Y+K6L+H5Y67MjnlpKnkuI3mtLvot4PnmoTnlKjmiLfvvIlcblxu6L2s5YyW546H5oyH5qCH77yaXG4tIFJVUlI6IOmHjeaWsOa/gOa0u+eUqOaIt+eVmeWtmOeOh1xuLSBTVVJSOiDlpI3mtLvnlKjmiLfnlZnlrZjnjodcbi0gQ1VSUjog5b2T5YmN55So5oi355WZ5a2Y546HXG4tIE5VUlI6IOaWsOeUqOaIt+eVmeWtmOeOh1xuLSBpV0FVUlI6IOWRqOa0u+i3g+eUqOaIt+aMveWbnueOh1xuLSBpTUFVUlI6IOaciOa0u+i3g+eUqOaIt+aMveWbnueOh1xuXG7or7fmoLnmja7ov5nkupvmlbDmja7vvIzluK7liqnnlKjmiLfliIbmnpDnlKjmiLfmtYHovazmg4XlhrXvvIzmj5DkvpvmlbDmja7mtJ7op4HjgIJgXG5cbiAgICAgICAgLy8g56Gu5L+d5q+P5Liq5raI5oGv6YO95pyJ5q2j56Gu55qE6KeS6Imy5ZKM5YaF5a65XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZE1lc3NhZ2VzID0gbWVzc2FnZXNcbiAgICAgICAgICAuZmlsdGVyKG1zZyA9PiBtc2cubWVzc2FnZT8udHJpbSgpKVxuICAgICAgICAgIC5tYXAobXNnID0+ICh7XG4gICAgICAgICAgICByb2xlOiBtc2cucm9sZSA9PT0gJ2Fzc2lzdGFudCcgPyAnYXNzaXN0YW50JyA6ICd1c2VyJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1zZy5tZXNzYWdlLnRyaW0oKVxuICAgICAgICAgIH0pKVxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RNZXNzYWdlcyA9IFtcbiAgICAgICAgICB7IHJvbGU6ICdzeXN0ZW0nLCBjb250ZW50OiBzeXN0ZW1Qcm9tcHQgfSxcbiAgICAgICAgICAuLi5mb3JtYXR0ZWRNZXNzYWdlcyxcbiAgICAgICAgICB7IHJvbGU6ICd1c2VyJywgY29udGVudDogbWVzc2FnZS50cmltKCkgfVxuICAgICAgICBdXG5cbiAgICAgICAgLy8g6aqM6K+B5omA5pyJ5raI5oGvXG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gcmVxdWVzdE1lc3NhZ2VzLmZpbmQobXNnID0+ICFtc2cuY29udGVudClcbiAgICAgICAgaWYgKGludmFsaWRNZXNzYWdlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfmtojmga/lhoXlrrnkuI3og73kuLrnqbonKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ09wZW5BSSDor7fmsYLmtojmga86JywgSlNPTi5zdHJpbmdpZnkocmVxdWVzdE1lc3NhZ2VzLCBudWxsLCAyKSlcblxuICAgICAgICAvLyDliJvlu7rlr7nor53mtYFcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgICAgIG1vZGVsOiAnZ3B0LTRvLW1pbmknLFxuICAgICAgICAgIG1lc3NhZ2VzOiByZXF1ZXN0TWVzc2FnZXMsXG4gICAgICAgICAgc3RyZWFtOiB0cnVlLFxuICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjcsXG4gICAgICAgICAgbWF4X3Rva2VuczogMTAwMCxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZygnT3BlbkFJIOa1geWIm+W7uuaIkOWKnycpXG5cbiAgICAgICAgLy8g5aSE55CG5rWB5byP5ZON5bqUXG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2YgcmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zdCBkZWx0YSA9IGNodW5rLmNob2ljZXNbMF0/LmRlbHRhPy5jb250ZW50IHx8ICcnXG4gICAgICAgICAgY29udGVudCArPSBkZWx0YVxuICAgICAgICAgIG9uVXBkYXRlKGNvbnRlbnQpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnT3BlbkFJIOWTjeW6lOWujOaIkDonLCB7IGNvbnRlbnRMZW5ndGg6IGNvbnRlbnQubGVuZ3RoIH0pXG4gICAgICAgIG9uU3VjY2Vzcyhjb250ZW50KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQUkg5ZON5bqU6ZSZ6K+vOicsIGVycm9yKVxuICAgICAgICBjb25zdCBlcnJvck1zZyA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBcbiAgICAgICAgICBgJHtlcnJvci5uYW1lfTogJHtlcnJvci5tZXNzYWdlfWAgOiBcbiAgICAgICAgICAn5pyq55+l6ZSZ6K+vJ1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoYOivt+axguWksei0pTogJHtlcnJvck1zZ31gKVxuICAgICAgICBvbkVycm9yKClcbiAgICAgIH1cbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IHsgbWVzc2FnZXMsIG9uUmVxdWVzdCB9ID0gdXNlWENoYXQoeyBcbiAgICBhZ2VudCxcbiAgICBpbml0aWFsTWVzc2FnZXM6IFt7XG4gICAgICBpZDogJzEnLFxuICAgICAgcm9sZTogJ2Fzc2lzdGFudCcsXG4gICAgICBtZXNzYWdlOiAn5L2g5aW977yB5oiR5piv5L2g55qE5pWw5o2u5YiG5p6Q5Yqp5omL44CC5oiR5Y+v5Lul5biu5L2g5YiG5p6Q55So5oi35rWB6L2s5pWw5o2u77yM5Zue562U5L2g55qE6Zeu6aKY77yM5bm25o+Q5L6b5pWw5o2u5rSe6KeB44CCXFxuXFxu5L2g5Y+v5Lul6Zeu5oiR77yaXFxuMS4g5b2T5YmN55So5oi35rWB5aSx5oOF5Ya15aaC5L2V77yfXFxuMi4g5paw55So5oi355WZ5a2Y546H5piv5aSa5bCR77yfXFxuMy4g55So5oi35rS76LeD5bqm6LaL5Yq/5YiG5p6QXFxuNC4g5aaC5L2V5o+Q6auY55So5oi355WZ5a2Y546H77yfJyxcbiAgICB9XSxcbiAgfSlcblxuICBjb25zdCBpdGVtcyA9IG1lc3NhZ2VzLm1hcCgoeyBtZXNzYWdlLCBpZCB9KSA9PiAoe1xuICAgIGtleTogaWQsXG4gICAgY29udGVudDogbWVzc2FnZSB8fCAnJywgIC8vIOehruS/nSBjb250ZW50IOS4jeS4uiBudWxsXG4gIH0pKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctYmx1ZS01MCBib3JkZXItYlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+QUkg5pWw5o2u5YiG5p6Q5Yqp5omLPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+5oiR5Y+v5Lul5biu5L2g5YiG5p6Q55So5oi35rWB6L2s5pWw5o2u77yM5o+Q5L6b5pWw5o2u5rSe6KeBPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy1hdXRvIHAtNFwiPlxuICAgICAgICA8QnViYmxlLkxpc3QgaXRlbXM9e2l0ZW1zfSAvPlxuICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcC0zIGJnLXJlZC01MCB0ZXh0LXJlZC03MDAgcm91bmRlZC1tZCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItdFwiPlxuICAgICAgICA8U2VuZGVyIFxuICAgICAgICAgIG9uU3VibWl0PXtvblJlcXVlc3R9IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6L6T5YWl5L2g55qE6Zeu6aKYLi4uXCJcbiAgICAgICAgICBzZW5kQnV0dG9uUHJvcHM9e3tcbiAgICAgICAgICAgIGNoaWxkcmVuOiAn5Y+R6YCBJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnViYmxlIiwiU2VuZGVyIiwidXNlWENoYXQiLCJ1c2VYQWdlbnQiLCJPcGVuQUkiLCJvcGVuYWkiLCJiYXNlVVJMIiwiYXBpS2V5IiwiZGVmYXVsdEhlYWRlcnMiLCJkZWZhdWx0UXVlcnkiLCJkYW5nZXJvdXNseUFsbG93QnJvd3NlciIsIkFJQ29waWxvdCIsImRhdGEiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJhZ2VudCIsInJlcXVlc3QiLCJpbmZvIiwiY2FsbGJhY2tzIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwib25VcGRhdGUiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiY29udGVudCIsInRyaW0iLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoaXN0b3J5TGVuZ3RoIiwibGVuZ3RoIiwicm93cyIsInN5c3RlbVByb21wdCIsIm1hcCIsInJvdyIsIm1ldHJpY19uYW1lIiwibWV0cmljX3ZhbHVlIiwiam9pbiIsImZvcm1hdHRlZE1lc3NhZ2VzIiwiZmlsdGVyIiwibXNnIiwicm9sZSIsInJlcXVlc3RNZXNzYWdlcyIsImludmFsaWRNZXNzYWdlIiwiZmluZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIiwic3RyZWFtIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiY2h1bmsiLCJkZWx0YSIsImNob2ljZXMiLCJjb250ZW50TGVuZ3RoIiwiZXJyb3IiLCJlcnJvck1zZyIsIm5hbWUiLCJvblJlcXVlc3QiLCJpbml0aWFsTWVzc2FnZXMiLCJpZCIsIml0ZW1zIiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiTGlzdCIsIm9uU3VibWl0IiwicGxhY2Vob2xkZXIiLCJzZW5kQnV0dG9uUHJvcHMiLCJjaGlsZHJlbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/data-visualization/ai-copilot.tsx\n"));

/***/ })

});
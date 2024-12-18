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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AICopilot: () => (/* binding */ AICopilot)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/x */ \"(app-pages-browser)/./node_modules/@ant-design/x/es/useXAgent/index.js\");\n/* harmony import */ var _ant_design_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/x */ \"(app-pages-browser)/./node_modules/@ant-design/x/es/useXChat/index.js\");\n/* harmony import */ var _ant_design_x__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/x */ \"(app-pages-browser)/./node_modules/@ant-design/x/es/bubble/index.js\");\n/* harmony import */ var _ant_design_x__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/x */ \"(app-pages-browser)/./node_modules/@ant-design/x/es/sender/index.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! openai */ \"(app-pages-browser)/./node_modules/openai/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_Typography_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Typography!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/typography/index.js\");\n/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it */ \"(app-pages-browser)/./node_modules/markdown-it/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=UserOutlined!=!@ant-design/icons */ \"(app-pages-browser)/./node_modules/@ant-design/icons/es/icons/UserOutlined.js\");\n/* __next_internal_client_entry_do_not_use__ AICopilot auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// 初始化 markdown 解析器\nconst md = new markdown_it__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    html: true,\n    breaks: true,\n    linkify: true\n});\n// 初始化 OpenAI 客户端\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    baseURL: 'https://aigc.sankuai.com/v1/openai/native',\n    apiKey: '1797875959782527043',\n    dangerouslyAllowBrowser: true\n});\n// Markdown 渲染组件\nconst renderMarkdown = (content)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Typography_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"prose prose-sm max-w-none dark:prose-invert\",\n            dangerouslySetInnerHTML: {\n                __html: md.render(content || '')\n            }\n        }, void 0, false, {\n            fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, undefined);\nfunction AICopilot(param) {\n    let { data } = param;\n    _s();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [agent] = (0,_ant_design_x__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        request: {\n            \"AICopilot.useXAgent\": async (info, callbacks)=>{\n                const { messages, message } = info;\n                const { onUpdate, onSuccess, onError } = callbacks;\n                let content = '';\n                setErrorMessage(null);\n                try {\n                    // 验证输入消息\n                    if (!(message === null || message === void 0 ? void 0 : message.trim())) {\n                        throw new Error('请输入有效的问题');\n                    }\n                    console.log('发送请求到 OpenAI:', {\n                        message,\n                        historyLength: messages.length,\n                        data: data.rows.length\n                    });\n                    // 构建系统提示词\n                    const systemPrompt = \"你是一个专业的数据分析助手。你将帮助用户分析用户流转数据。\\n\\n## 当前数据\\n```csv\\nmetric_name,metric_value\\n\".concat(data.rows.map({\n                        \"AICopilot.useXAgent\": (row)=>\"\".concat(row.metric_name, \",\").concat(row.metric_value)\n                    }[\"AICopilot.useXAgent\"]).join('\\n'), \"\\n```\\n\\n## 主要指标说明\\n- current_user: 当前用户数（今日活跃且过去7天内至少活跃1次的用户）\\n- new_user: 新用户数（首次使用应用的用户）\\n- reactivated_user: 重新激活用户数（首次回访的用户）\\n- resurrected_user: 复活用户数（首日回访的用户）\\n- at_risk_waus: 周活跃用户流失风险数（今日不活跃，但过去1-6天活跃的用户）\\n- at_risk_maus: 月活跃用户流失风险数（今日不活跃，过去1-6天不活跃，但过去7-29天活跃的用户）\\n- dead_users: 流失用户数（今日及过去29天不活跃的用户）\\n\\n## 转化率指标说明\\n- RURR: 重新激活用户留存率\\n- SURR: 复活用户留存率\\n- CURR: 当前用户留存率\\n- NURR: 新用户留存率\\n- iWAURR: 周活跃用户挽回率\\n- iMAURR: 月活跃用户挽回率\\n\\n## 数据分析要求\\n1. 请使用 Markdown 格式回复\\n2. 可以使用表格、列表、引用等格式来展示数据分析结果\\n3. 重点关注用户流失和留存情况\\n4. 提供具体的数据洞见和改进建议\\n5. 如果发现数据异常，请指出并分析可能的原因\\n\\n请根据这些数据，帮助用户分析用户流转情况，提供数据洞见。\");\n                    // 确保每个消息都有正确的角色和内容\n                    const formattedMessages = messages.filter({\n                        \"AICopilot.useXAgent.formattedMessages\": (msg)=>{\n                            var _msg_message;\n                            return (_msg_message = msg.message) === null || _msg_message === void 0 ? void 0 : _msg_message.trim();\n                        }\n                    }[\"AICopilot.useXAgent.formattedMessages\"]).map({\n                        \"AICopilot.useXAgent.formattedMessages\": (msg)=>({\n                                role: msg.role === 'assistant' ? 'assistant' : 'user',\n                                content: msg.message.trim()\n                            })\n                    }[\"AICopilot.useXAgent.formattedMessages\"]);\n                    const requestMessages = [\n                        {\n                            role: 'system',\n                            content: systemPrompt\n                        },\n                        ...formattedMessages,\n                        {\n                            role: 'user',\n                            content: message.trim()\n                        }\n                    ];\n                    // 验证所有消息\n                    const invalidMessage = requestMessages.find({\n                        \"AICopilot.useXAgent.invalidMessage\": (msg)=>!msg.content\n                    }[\"AICopilot.useXAgent.invalidMessage\"]);\n                    if (invalidMessage) {\n                        throw new Error('消息内容不能为空');\n                    }\n                    console.log('OpenAI 请求消息:', JSON.stringify(requestMessages, null, 2));\n                    // 创建对话流\n                    const response = await openai.chat.completions.create({\n                        model: 'gpt-4o-mini',\n                        messages: requestMessages,\n                        stream: true,\n                        temperature: 0.7,\n                        max_tokens: 1000\n                    });\n                    console.log('OpenAI 流创建成功');\n                    // 处理流式响应\n                    for await (const chunk of response){\n                        var _chunk_choices__delta, _chunk_choices_;\n                        const delta = ((_chunk_choices_ = chunk.choices[0]) === null || _chunk_choices_ === void 0 ? void 0 : (_chunk_choices__delta = _chunk_choices_.delta) === null || _chunk_choices__delta === void 0 ? void 0 : _chunk_choices__delta.content) || '';\n                        content += delta;\n                        onUpdate(content);\n                    }\n                    console.log('OpenAI 响应完成:', {\n                        contentLength: content.length\n                    });\n                    onSuccess(content);\n                } catch (error) {\n                    console.error('AI 响应错误:', error);\n                    const errorMsg = error instanceof Error ? \"\".concat(error.name, \": \").concat(error.message) : '未知错误';\n                    setErrorMessage(\"请求失败: \".concat(errorMsg));\n                    onError();\n                }\n            }\n        }[\"AICopilot.useXAgent\"]\n    });\n    const { messages, onRequest } = (0,_ant_design_x__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n        agent,\n        initialMessages: [\n            {\n                id: '1',\n                role: 'assistant',\n                message: \"# \\uD83D\\uDC4B 你好！\\n\\n我是你的数据分析助手。我可以帮你分析用户流转数据，回答你的问题，并提供数据洞见。\\n\\n你可以问我：\\n\\n1. 当前用户流失情况如何？\\n2. 新用户留存率是多少？\\n3. 用户活跃度趋势分析\\n4. 如何提高用户留存率？\\n\\n> \\uD83D\\uDCA1 提示：我支持 Markdown 格式，可以通过表格、列表、引用等方式更清晰地展示分析结果。\"\n            }\n        ]\n    });\n    const items = messages.map((param)=>{\n        let { message, id, role } = param;\n        return {\n            key: id,\n            content: message || '',\n            messageRender: renderMarkdown,\n            avatar: {\n                icon: role === 'assistant' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_UserOutlined_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                    lineNumber: 177,\n                    columnNumber: 36\n                }, this) : undefined\n            }\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 bg-blue-50 border-b\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold\",\n                        children: \"AI 数据分析助手\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                        lineNumber: 184,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-600\",\n                        children: \"我可以帮你分析用户流转数据，提供数据洞见\"\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                        lineNumber: 185,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 overflow-auto p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_x__WEBPACK_IMPORTED_MODULE_8__[\"default\"].List, {\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                        lineNumber: 188,\n                        columnNumber: 9\n                    }, this),\n                    errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 p-3 bg-red-50 text-red-700 rounded-md text-sm\",\n                        children: errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                        lineNumber: 190,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                lineNumber: 187,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border-t\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_x__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    onSubmit: onRequest,\n                    placeholder: \"输入你的问题...\",\n                    sendButtonProps: {\n                        children: '发送'\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                    lineNumber: 196,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n                lineNumber: 195,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/will/Code/curr-vis-web/src/components/data-visualization/ai-copilot.tsx\",\n        lineNumber: 182,\n        columnNumber: 5\n    }, this);\n}\n_s(AICopilot, \"etTykMdbxgItuQ1Y+nMeInURZxc=\", false, function() {\n    return [\n        _ant_design_x__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _ant_design_x__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = AICopilot;\nvar _c;\n$RefreshReg$(_c, \"AICopilot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2RhdGEtdmlzdWFsaXphdGlvbi9haS1jb3BpbG90LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVnQztBQUNtQztBQUN4QztBQUVNO0FBQ0c7QUFDWTtBQUVoRCxtQkFBbUI7QUFDbkIsTUFBTVMsS0FBSyxJQUFJRixtREFBVUEsQ0FBQztJQUN4QkcsTUFBTTtJQUNOQyxRQUFRO0lBQ1JDLFNBQVM7QUFDWDtBQUVBLGlCQUFpQjtBQUNqQixNQUFNQyxTQUFTLElBQUlSLDhDQUFNQSxDQUFDO0lBQ3hCUyxTQUFTO0lBQ1RDLFFBQVE7SUFDUkMseUJBQXlCO0FBQzNCO0FBTUEsZ0JBQWdCO0FBQ2hCLE1BQU1DLGlCQUFpQixDQUFDQyx3QkFDdEIsOERBQUNaLDhFQUFVQTtrQkFDVCw0RUFBQ2E7WUFDQ0MsV0FBVTtZQUNWQyx5QkFBeUI7Z0JBQ3ZCQyxRQUFRYixHQUFHYyxNQUFNLENBQUNMLFdBQVc7WUFDL0I7Ozs7Ozs7Ozs7O0FBS0MsU0FBU00sVUFBVSxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQWtCLEdBQXhCOztJQUN4QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHM0IsK0NBQVFBLENBQWdCO0lBRWhFLE1BQU0sQ0FBQzRCLE1BQU0sR0FBR3hCLHlEQUFTQSxDQUFDO1FBQ3hCeUIsT0FBTzttQ0FBRSxPQUFPQyxNQUFNQztnQkFDcEIsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRSxHQUFHSDtnQkFDOUIsTUFBTSxFQUFFSSxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFLEdBQUdMO2dCQUV6QyxJQUFJYixVQUFVO2dCQUNkUyxnQkFBZ0I7Z0JBRWhCLElBQUk7b0JBQ0YsU0FBUztvQkFDVCxJQUFJLEVBQUNNLG9CQUFBQSw4QkFBQUEsUUFBU0ksSUFBSSxLQUFJO3dCQUNwQixNQUFNLElBQUlDLE1BQU07b0JBQ2xCO29CQUVBQyxRQUFRQyxH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RTtZQUNsRDtRQUNGOztJQUVBLHFCQUNFLDhEQUFDL0Q7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQytEO3dCQUFHL0QsV0FBVTtrQ0FBd0I7Ozs7OztrQ0FDdEMsOERBQUNnRTt3QkFBRWhFLFdBQVU7a0NBQXdCOzs7Ozs7Ozs7Ozs7MEJBRXZDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNuQixxREFBTUEsQ0FBQ29GLElBQUk7d0JBQUNSLE9BQU9BOzs7Ozs7b0JBQ25CbkQsOEJBQ0MsOERBQUNQO3dCQUFJQyxXQUFVO2tDQUNaTTs7Ozs7Ozs7Ozs7OzBCQUlQLDhEQUFDUDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2xCLHFEQUFNQTtvQkFDTG9GLFVBQVVaO29CQUNWYSxhQUFZO29CQUNaQyxpQkFBaUI7d0JBQ2ZDLFVBQVU7b0JBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7R0FyS2dCakU7O1FBR0VwQixxREFBU0E7UUE0R09ELHFEQUFRQTs7O0tBL0cxQnFCIiwic291cmNlcyI6WyIvVXNlcnMvd2lsbC9Db2RlL2N1cnItdmlzLXdlYi9zcmMvY29tcG9uZW50cy9kYXRhLXZpc3VhbGl6YXRpb24vYWktY29waWxvdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdWJibGUsIFNlbmRlciwgdXNlWENoYXQsIHVzZVhBZ2VudCB9IGZyb20gJ0BhbnQtZGVzaWduL3gnXG5pbXBvcnQgT3BlbkFJIGZyb20gJ29wZW5haSdcbmltcG9ydCB7IENTVkRhdGEgfSBmcm9tICdAL3R5cGVzL2NzdidcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IE1hcmtkb3duSXQgZnJvbSAnbWFya2Rvd24taXQnXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcblxuLy8g5Yid5aeL5YyWIG1hcmtkb3duIOino+aekOWZqFxuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCh7XG4gIGh0bWw6IHRydWUsXG4gIGJyZWFrczogdHJ1ZSxcbiAgbGlua2lmeTogdHJ1ZSxcbn0pXG5cbi8vIOWIneWni+WMliBPcGVuQUkg5a6i5oi356uvXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8vYWlnYy5zYW5rdWFpLmNvbS92MS9vcGVuYWkvbmF0aXZlJyxcbiAgYXBpS2V5OiAnMTc5Nzg3NTk1OTc4MjUyNzA0MycsXG4gIGRhbmdlcm91c2x5QWxsb3dCcm93c2VyOiB0cnVlLFxufSlcblxuaW50ZXJmYWNlIEFJQ29waWxvdFByb3BzIHtcbiAgZGF0YTogQ1NWRGF0YVxufVxuXG4vLyBNYXJrZG93biDmuLLmn5Pnu4Tku7ZcbmNvbnN0IHJlbmRlck1hcmtkb3duID0gKGNvbnRlbnQ6IHN0cmluZykgPT4gKFxuICA8VHlwb2dyYXBoeT5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJwcm9zZSBwcm9zZS1zbSBtYXgtdy1ub25lIGRhcms6cHJvc2UtaW52ZXJ0XCJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgIF9faHRtbDogbWQucmVuZGVyKGNvbnRlbnQgfHwgJycpLFxuICAgICAgfX1cbiAgICAvPlxuICA8L1R5cG9ncmFwaHk+XG4pXG5cbmV4cG9ydCBmdW5jdGlvbiBBSUNvcGlsb3QoeyBkYXRhIH06IEFJQ29waWxvdFByb3BzKSB7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IFthZ2VudF0gPSB1c2VYQWdlbnQoe1xuICAgIHJlcXVlc3Q6IGFzeW5jIChpbmZvLCBjYWxsYmFja3MpID0+IHtcbiAgICAgIGNvbnN0IHsgbWVzc2FnZXMsIG1lc3NhZ2UgfSA9IGluZm9cbiAgICAgIGNvbnN0IHsgb25VcGRhdGUsIG9uU3VjY2Vzcywgb25FcnJvciB9ID0gY2FsbGJhY2tzXG5cbiAgICAgIGxldCBjb250ZW50ID0gJydcbiAgICAgIHNldEVycm9yTWVzc2FnZShudWxsKVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyDpqozor4HovpPlhaXmtojmga9cbiAgICAgICAgaWYgKCFtZXNzYWdlPy50cmltKCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+ivt+i+k+WFpeacieaViOeahOmXrumimCcpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygn5Y+R6YCB6K+35rGC5YiwIE9wZW5BSTonLCB7XG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICBoaXN0b3J5TGVuZ3RoOiBtZXNzYWdlcy5sZW5ndGgsXG4gICAgICAgICAgZGF0YTogZGF0YS5yb3dzLmxlbmd0aFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIOaehOW7uuezu+e7n+aPkOekuuivjVxuICAgICAgICBjb25zdCBzeXN0ZW1Qcm9tcHQgPSBg5L2g5piv5LiA5Liq5LiT5Lia55qE5pWw5o2u5YiG5p6Q5Yqp5omL44CC5L2g5bCG5biu5Yqp55So5oi35YiG5p6Q55So5oi35rWB6L2s5pWw5o2u44CCXG5cbiMjIOW9k+WJjeaVsOaNrlxuXFxgXFxgXFxgY3N2XG5tZXRyaWNfbmFtZSxtZXRyaWNfdmFsdWVcbiR7ZGF0YS5yb3dzLm1hcChyb3cgPT4gYCR7cm93Lm1ldHJpY19uYW1lfSwke3Jvdy5tZXRyaWNfdmFsdWV9YCkuam9pbignXFxuJyl9XG5cXGBcXGBcXGBcblxuIyMg5Li76KaB5oyH5qCH6K+05piOXG4tIGN1cnJlbnRfdXNlcjog5b2T5YmN55So5oi35pWw77yI5LuK5pel5rS76LeD5LiU6L+H5Y67N+WkqeWGheiHs+Wwkea0u+i3gzHmrKHnmoTnlKjmiLfvvIlcbi0gbmV3X3VzZXI6IOaWsOeUqOaIt+aVsO+8iOmmluasoeS9v+eUqOW6lOeUqOeahOeUqOaIt++8iVxuLSByZWFjdGl2YXRlZF91c2VyOiDph43mlrDmv4DmtLvnlKjmiLfmlbDvvIjpppbmrKHlm57orr/nmoTnlKjmiLfvvIlcbi0gcmVzdXJyZWN0ZWRfdXNlcjog5aSN5rS755So5oi35pWw77yI6aaW5pel5Zue6K6/55qE55So5oi377yJXG4tIGF0X3Jpc2tfd2F1czog5ZGo5rS76LeD55So5oi35rWB5aSx6aOO6Zmp5pWw77yI5LuK5pel5LiN5rS76LeD77yM5L2G6L+H5Y67MS025aSp5rS76LeD55qE55So5oi377yJXG4tIGF0X3Jpc2tfbWF1czog5pyI5rS76LeD55So5oi35rWB5aSx6aOO6Zmp5pWw77yI5LuK5pel5LiN5rS76LeD77yM6L+H5Y67MS025aSp5LiN5rS76LeD77yM5L2G6L+H5Y67Ny0yOeWkqea0u+i3g+eahOeUqOaIt++8iVxuLSBkZWFkX3VzZXJzOiDmtYHlpLHnlKjmiLfmlbDvvIjku4rml6Xlj4rov4fljrsyOeWkqeS4jea0u+i3g+eahOeUqOaIt++8iVxuXG4jIyDovazljJbnjofmjIfmoIfor7TmmI5cbi0gUlVSUjog6YeN5paw5r+A5rS755So5oi355WZ5a2Y546HXG4tIFNVUlI6IOWkjea0u+eUqOaIt+eVmeWtmOeOh1xuLSBDVVJSOiDlvZPliY3nlKjmiLfnlZnlrZjnjodcbi0gTlVSUjog5paw55So5oi355WZ5a2Y546HXG4tIGlXQVVSUjog5ZGo5rS76LeD55So5oi35oy95Zue546HXG4tIGlNQVVSUjog5pyI5rS76LeD55So5oi35oy95Zue546HXG5cbiMjIOaVsOaNruWIhuaekOimgeaxglxuMS4g6K+35L2/55SoIE1hcmtkb3duIOagvOW8j+WbnuWkjVxuMi4g5Y+v5Lul5L2/55So6KGo5qC844CB5YiX6KGo44CB5byV55So562J5qC85byP5p2l5bGV56S65pWw5o2u5YiG5p6Q57uT5p6cXG4zLiDph43ngrnlhbPms6jnlKjmiLfmtYHlpLHlkoznlZnlrZjmg4XlhrVcbjQuIOaPkOS+m+WFt+S9k+eahOaVsOaNrua0nuingeWSjOaUuei/m+W7uuiurlxuNS4g5aaC5p6c5Y+R546w5pWw5o2u5byC5bi477yM6K+35oyH5Ye65bm25YiG5p6Q5Y+v6IO955qE5Y6f5ZugXG5cbuivt+agueaNrui/meS6m+aVsOaNru+8jOW4ruWKqeeUqOaIt+WIhuaekOeUqOaIt+a1gei9rOaDheWGte+8jOaPkOS+m+aVsOaNrua0nuingeOAgmBcblxuICAgICAgICAvLyDnoa7kv53mr4/kuKrmtojmga/pg73mnInmraPnoa7nmoTop5LoibLlkozlhoXlrrlcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkTWVzc2FnZXMgPSBtZXNzYWdlc1xuICAgICAgICAgIC5maWx0ZXIobXNnID0+IG1zZy5tZXNzYWdlPy50cmltKCkpXG4gICAgICAgICAgLm1hcChtc2cgPT4gKHtcbiAgICAgICAgICAgIHJvbGU6IG1zZy5yb2xlID09PSAnYXNzaXN0YW50JyA/ICdhc3Npc3RhbnQnIDogJ3VzZXInLFxuICAgICAgICAgICAgY29udGVudDogbXNnLm1lc3NhZ2UudHJpbSgpXG4gICAgICAgICAgfSkpXG5cbiAgICAgICAgY29uc3QgcmVxdWVzdE1lc3NhZ2VzID0gW1xuICAgICAgICAgIHsgcm9sZTogJ3N5c3RlbScsIGNvbnRlbnQ6IHN5c3RlbVByb21wdCB9LFxuICAgICAgICAgIC4uLmZvcm1hdHRlZE1lc3NhZ2VzLFxuICAgICAgICAgIHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiBtZXNzYWdlLnRyaW0oKSB9XG4gICAgICAgIF1cblxuICAgICAgICAvLyDpqozor4HmiYDmnInmtojmga9cbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSByZXF1ZXN0TWVzc2FnZXMuZmluZChtc2cgPT4gIW1zZy5jb250ZW50KVxuICAgICAgICBpZiAoaW52YWxpZE1lc3NhZ2UpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ+a2iOaBr+WGheWuueS4jeiDveS4uuepuicpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnT3BlbkFJIOivt+axgua2iOaBrzonLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0TWVzc2FnZXMsIG51bGwsIDIpKVxuXG4gICAgICAgIC8vIOWIm+W7uuWvueivnea1gVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgICAgICAgbW9kZWw6ICdncHQtNG8tbWluaScsXG4gICAgICAgICAgbWVzc2FnZXM6IHJlcXVlc3RNZXNzYWdlcyxcbiAgICAgICAgICBzdHJlYW06IHRydWUsXG4gICAgICAgICAgdGVtcGVyYXR1cmU6IDAuNyxcbiAgICAgICAgICBtYXhfdG9rZW5zOiAxMDAwLFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdPcGVuQUkg5rWB5Yib5bu65oiQ5YqfJylcblxuICAgICAgICAvLyDlpITnkIbmtYHlvI/lk43lupRcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiByZXNwb25zZSkge1xuICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2h1bmsuY2hvaWNlc1swXT8uZGVsdGE/LmNvbnRlbnQgfHwgJydcbiAgICAgICAgICBjb250ZW50ICs9IGRlbHRhXG4gICAgICAgICAgb25VcGRhdGUoY29udGVudClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdPcGVuQUkg5ZON5bqU5a6M5oiQOicsIHsgY29udGVudExlbmd0aDogY29udGVudC5sZW5ndGggfSlcbiAgICAgICAgb25TdWNjZXNzKGNvbnRlbnQpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBSSDlk43lupTplJnor686JywgZXJyb3IpXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IFxuICAgICAgICAgIGAke2Vycm9yLm5hbWV9OiAke2Vycm9yLm1lc3NhZ2V9YCA6IFxuICAgICAgICAgICfmnKrnn6XplJnor68nXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShg6K+35rGC5aSx6LSlOiAke2Vycm9yTXNnfWApXG4gICAgICAgIG9uRXJyb3IoKVxuICAgICAgfVxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3QgeyBtZXNzYWdlcywgb25SZXF1ZXN0IH0gPSB1c2VYQ2hhdCh7IFxuICAgIGFnZW50LFxuICAgIGluaXRpYWxNZXNzYWdlczogW3tcbiAgICAgIGlkOiAnMScsXG4gICAgICByb2xlOiAnYXNzaXN0YW50JyxcbiAgICAgIG1lc3NhZ2U6IGAjIPCfkYsg5L2g5aW977yBXG5cbuaIkeaYr+S9oOeahOaVsOaNruWIhuaekOWKqeaJi+OAguaIkeWPr+S7peW4ruS9oOWIhuaekOeUqOaIt+a1gei9rOaVsOaNru+8jOWbnuetlOS9oOeahOmXrumimO+8jOW5tuaPkOS+m+aVsOaNrua0nuingeOAglxuXG7kvaDlj6/ku6Xpl67miJHvvJpcblxuMS4g5b2T5YmN55So5oi35rWB5aSx5oOF5Ya15aaC5L2V77yfXG4yLiDmlrDnlKjmiLfnlZnlrZjnjofmmK/lpJrlsJHvvJ9cbjMuIOeUqOaIt+a0u+i3g+W6pui2i+WKv+WIhuaekFxuNC4g5aaC5L2V5o+Q6auY55So5oi355WZ5a2Y546H77yfXG5cbj4g8J+SoSDmj5DnpLrvvJrmiJHmlK/mjIEgTWFya2Rvd24g5qC85byP77yM5Y+v5Lul6YCa6L+H6KGo5qC844CB5YiX6KGo44CB5byV55So562J5pa55byP5pu05riF5pmw5Zyw5bGV56S65YiG5p6Q57uT5p6c44CCYCxcbiAgICB9XSxcbiAgfSlcblxuICBjb25zdCBpdGVtcyA9IG1lc3NhZ2VzLm1hcCgoeyBtZXNzYWdlLCBpZCwgcm9sZSB9KSA9PiAoe1xuICAgIGtleTogaWQsXG4gICAgY29udGVudDogbWVzc2FnZSB8fCAnJyxcbiAgICBtZXNzYWdlUmVuZGVyOiByZW5kZXJNYXJrZG93bixcbiAgICBhdmF0YXI6IHtcbiAgICAgIGljb246IHJvbGUgPT09ICdhc3Npc3RhbnQnID8gPFVzZXJPdXRsaW5lZCAvPiA6IHVuZGVmaW5lZCxcbiAgICB9LFxuICB9KSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWJsdWUtNTAgYm9yZGVyLWJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPkFJIOaVsOaNruWIhuaekOWKqeaJizwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPuaIkeWPr+S7peW4ruS9oOWIhuaekOeUqOaIt+a1gei9rOaVsOaNru+8jOaPkOS+m+aVsOaNrua0nuingTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3ctYXV0byBwLTRcIj5cbiAgICAgICAgPEJ1YmJsZS5MaXN0IGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHAtMyBiZy1yZWQtNTAgdGV4dC1yZWQtNzAwIHJvdW5kZWQtbWQgdGV4dC1zbVwiPlxuICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLXRcIj5cbiAgICAgICAgPFNlbmRlciBcbiAgICAgICAgICBvblN1Ym1pdD17b25SZXF1ZXN0fSBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIui+k+WFpeS9oOeahOmXrumimC4uLlwiXG4gICAgICAgICAgc2VuZEJ1dHRvblByb3BzPXt7XG4gICAgICAgICAgICBjaGlsZHJlbjogJ+WPkemAgScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59ICJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1YmJsZSIsIlNlbmRlciIsInVzZVhDaGF0IiwidXNlWEFnZW50IiwiT3BlbkFJIiwiVHlwb2dyYXBoeSIsIk1hcmtkb3duSXQiLCJVc2VyT3V0bGluZWQiLCJtZCIsImh0bWwiLCJicmVha3MiLCJsaW5raWZ5Iiwib3BlbmFpIiwiYmFzZVVSTCIsImFwaUtleSIsImRhbmdlcm91c2x5QWxsb3dCcm93c2VyIiwicmVuZGVyTWFya2Rvd24iLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZW5kZXIiLCJBSUNvcGlsb3QiLCJkYXRhIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiYWdlbnQiLCJyZXF1ZXN0IiwiaW5mbyIsImNhbGxiYWNrcyIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsIm9uVXBkYXRlIiwib25TdWNjZXNzIiwib25FcnJvciIsInRyaW0iLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoaXN0b3J5TGVuZ3RoIiwibGVuZ3RoIiwicm93cyIsInN5c3RlbVByb21wdCIsIm1hcCIsInJvdyIsIm1ldHJpY19uYW1lIiwibWV0cmljX3ZhbHVlIiwiam9pbiIsImZvcm1hdHRlZE1lc3NhZ2VzIiwiZmlsdGVyIiwibXNnIiwicm9sZSIsInJlcXVlc3RNZXNzYWdlcyIsImludmFsaWRNZXNzYWdlIiwiZmluZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIiwic3RyZWFtIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiY2h1bmsiLCJkZWx0YSIsImNob2ljZXMiLCJjb250ZW50TGVuZ3RoIiwiZXJyb3IiLCJlcnJvck1zZyIsIm5hbWUiLCJvblJlcXVlc3QiLCJpbml0aWFsTWVzc2FnZXMiLCJpZCIsIml0ZW1zIiwia2V5IiwibWVzc2FnZVJlbmRlciIsImF2YXRhciIsImljb24iLCJ1bmRlZmluZWQiLCJoMiIsInAiLCJMaXN0Iiwib25TdWJtaXQiLCJwbGFjZWhvbGRlciIsInNlbmRCdXR0b25Qcm9wcyIsImNoaWxkcmVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/data-visualization/ai-copilot.tsx\n"));

/***/ })

});
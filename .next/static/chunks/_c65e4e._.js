(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_c65e4e._.js", {

"[project]/lib/textract.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "analyzeDocumentFromBuffer": (()=>analyzeDocumentFromBuffer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$textract$2f$dist$2d$es$2f$TextractClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@aws-sdk/client-textract/dist-es/TextractClient.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$providers$2f$dist$2d$es$2f$fromCognitoIdentityPool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@aws-sdk/credential-providers/dist-es/fromCognitoIdentityPool.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$textract$2f$dist$2d$es$2f$commands$2f$AnalyzeDocumentCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@aws-sdk/client-textract/dist-es/commands/AnalyzeDocumentCommand.js [app-client] (ecmascript) <locals>");
;
;
const textractClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$textract$2f$dist$2d$es$2f$TextractClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TextractClient"]({
    region: ("TURBOPACK compile-time value", "us-east-2"),
    credentials: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$providers$2f$dist$2d$es$2f$fromCognitoIdentityPool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromCognitoIdentityPool"])({
        identityPoolId: ("TURBOPACK compile-time value", "us-east-2:f67ca916-d422-4ccf-a2ac-ca50b34a377a"),
        clientConfig: {
            region: ("TURBOPACK compile-time value", "us-east-2")
        }
    })
});
const analyzeDocumentFromBuffer = async (fileBuffer)=>{
    try {
        const params = {
            Document: {
                Bytes: fileBuffer
            },
            FeatureTypes: [
                "FORMS",
                "TABLES",
                "SIGNATURES"
            ]
        };
        const command = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$textract$2f$dist$2d$es$2f$commands$2f$AnalyzeDocumentCommand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AnalyzeDocumentCommand"](params);
        const response = await textractClient.send(command);
        return response;
    } catch (error) {
        console.error("Error analyzing document:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$textract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/textract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function Home() {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [missingFields, setMissingFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [documentAccepted, setDocumentAccepted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[onDrop]": async (acceptedFiles)=>{
            if (acceptedFiles.length === 0) return;
            const uploadedFile = acceptedFiles[0];
            setFile(uploadedFile);
            const fileArrayBuffer = await uploadedFile.arrayBuffer();
            const fileBuffer = new Uint8Array(fileArrayBuffer);
            try {
                setIsLoading(true);
                const textractResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$textract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeDocumentFromBuffer"])(fileBuffer);
                const missing = checkForKeywords(textractResult);
                setMissingFields(missing);
                setDocumentAccepted(missing.length === 0);
            } catch (error) {
                console.error("Error processing document:", error);
                setMissingFields([
                    "Error analyzing document."
                ]);
                setDocumentAccepted(false);
            } finally{
                setIsLoading(false);
            }
        }
    }["Home.useCallback[onDrop]"], []);
    const { getRootProps, getInputProps, isDragActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        onDrop,
        accept: {
            'application/pdf': [
                '.pdf'
            ],
            'image/*': [
                '.png',
                '.jpg',
                '.jpeg'
            ]
        },
        multiple: false
    });
    const checkForKeywords = (textractResult)=>{
        const missing = [];
        const textBlocks = textractResult.Blocks.filter((block)=>block.BlockType === 'LINE');
        const documentText = textBlocks.map((block)=>block.Text).join(" ").toLowerCase();
        // Check for keywords
        const keywords = [
            {
                keyword: "State of New Jersey",
                label: "State of New Jersey"
            },
            {
                keyword: "Clearance Certificate",
                label: "Clearance Certificate Keyword"
            },
            {
                keyword: "Philip D. Murphy",
                label: "Governor's Name"
            }
        ];
        keywords.forEach(({ keyword, label })=>{
            if (!documentText.includes(keyword.toLowerCase())) {
                missing.push(label);
            }
        });
        // Check for signature
        const hasSignature = checkForSignature(textractResult.Blocks);
        if (!hasSignature) {
            missing.push("Signature");
        }
        // Check for date (must be within past 6 months)
        const dateIsValid = checkForDate(documentText);
        if (!dateIsValid) {
            missing.push("Date must be within the last 6 months");
        }
        return missing;
    };
    // Existing signature check
    const checkForSignature = (blocks)=>{
        const signatureBlocks = blocks.filter((block)=>block.BlockType === 'SIGNATURE');
        if (signatureBlocks.length > 0) return true;
        const signatureEntities = blocks.filter((block)=>block.EntityTypes?.includes('SIGNATURE'));
        if (signatureEntities.length > 0) return true;
        const formFields = blocks.filter((block)=>block.BlockType === 'KEY_VALUE_SET' && block.EntityTypes?.includes('KEY'));
        const signatureField = formFields.some((field)=>{
            const childBlocks = blocks.filter((block)=>field.Relationships?.some((rel)=>rel.Type === 'CHILD' && rel.Ids.includes(block.Id)));
            const fieldText = childBlocks.map((block)=>block.Text?.toLowerCase() || '').join(' ');
            return fieldText.includes('signature') || fieldText.includes('signed');
        });
        return signatureField;
    };
    // Date Checking Logic
    const checkForDate = (documentText)=>{
        const datePattern = /(\d{1,2}[/-]\d{1,2}[/-]\d{4})/g;
        const matches = documentText.match(datePattern);
        if (!matches || matches.length === 0) {
            return false;
        }
        const dateStr = matches[0];
        const normalized = dateStr.replace(/-/g, "/");
        const parsedDate = new Date(normalized);
        if (isNaN(parsedDate.getTime())) {
            return false;
        }
        const now = new Date();
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(now.getMonth() - 6);
        return parsedDate >= sixMonthsAgo && parsedDate <= now;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        style: {
            maxWidth: "800px",
            margin: "2rem auto",
            padding: "2rem",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            fontFamily: "Arial, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: "1.8rem",
                    marginBottom: "1.5rem",
                    textAlign: "center"
                },
                children: "Tax Clearance Certificate Checker"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ...getRootProps(),
                className: "dropzone",
                style: {
                    border: "2px dashed #007bff",
                    padding: "30px",
                    textAlign: "center",
                    borderRadius: "8px",
                    background: "#f8f9fa",
                    cursor: "pointer"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...getInputProps()
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    isDragActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#007bff"
                        },
                        children: "Drop the file here..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Drag & drop a file here, or click to select a file"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    textAlign: "center",
                    marginTop: "1rem",
                    fontWeight: "bold"
                },
                children: [
                    "Uploaded File: ",
                    file.name
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center",
                    marginTop: "1rem",
                    fontWeight: "bold"
                },
                children: "Validating document..."
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 185,
                columnNumber: 9
            }, this),
            documentAccepted && missingFields.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "2rem",
                    backgroundColor: "#d4edda",
                    padding: "1rem",
                    borderRadius: "6px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "1.4rem",
                            color: "#155724"
                        },
                        children: "Document Accepted!"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#155724"
                        },
                        children: "Your document has passed all checks and is deemed valid."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 192,
                columnNumber: 9
            }, this),
            !documentAccepted && missingFields.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "2rem"
                },
                children: [
                    missingFields.length >= 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            backgroundColor: "yellow",
                            padding: "0.5rem",
                            borderRadius: "4px"
                        },
                        children: "ERROR: This document is likely NOT a tax clearance certificate"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 204,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: "1.4rem",
                            color: "#d9534f"
                        },
                        children: "Missing Fields:"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: missingFields.map((field, index)=>{
                            if (field === "Date must be within the last 6 months") {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    style: {
                                        color: "#d9534f"
                                    },
                                    children: "Date not provided or is not within the last 6 months"
                                }, index, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 222,
                                    columnNumber: 19
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    color: "#d9534f"
                                },
                                children: [
                                    field,
                                    " is missing or invalid"
                                ]
                            }, index, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 228,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 202,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(Home, "aJt5uZdR1HWnOZX94NFCEjfX2r0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
    ];
});
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_c65e4e._.js.map
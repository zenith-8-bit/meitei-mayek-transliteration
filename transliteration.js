(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[517], {
    694: (e, l, s) => {
        Promise.resolve().then(s.t.bind(s, 4015, 23)),
        Promise.resolve().then(s.bind(s, 6671)),
        Promise.resolve().then(s.bind(s, 911))
    }
    ,
    6671: (e, l, s) => {
        "use strict";
        s.d(l, {
            Transliterate: () => f
        });
        var t = s(705)
          , a = s(4821)
          , n = s(6001)
          , i = s(8288)
          , r = s(409)
          , d = s(657)
          , c = s(333)
          , o = s(8698)
          , x = s(8383)
          , h = s(9779);
        let p = (0,
        n.default)( () => s.e(883).then(s.bind(s, 8883)).then(e => e.TransInfer), {
            loadableGenerated: {
                webpack: () => [8883]
            },
            ssr: !1
        })
          , u = (0,
        h.y$)({
            context: {
                status: "loading",
                input: {
                    lang: "",
                    text: ""
                },
                result: {
                    status: "loading",
                    text: null,
                    completed: !0
                }
            },
            on: {
                status: (e, l) => ({
                    status: l.status
                }),
                infer: (e, l) => ({
                    input: {
                        lang: l.inp.lang,
                        text: l.inp.text
                    }
                }),
                onInfer: (e, l) => ({
                    result: l.result
                })
            }
        });
        function f() {
            var e, l, s;
            let n = (0,
            i.useSearchParams)()
              , h = null !== (l = n.get("lang")) && void 0 !== l ? l : g[0].key
              , [f,w] = (0,
            a.useState)("")
              , j = (0,
            o.d)(f, 250)
              , b = (0,
            r.d)(u, e => e.context.status)
              , y = (0,
            r.d)(u, e => e.context.result)
              , [N,k] = (0,
            a.useState)(null);
            return (0,
            a.useEffect)( () => {
                n.get("lang") || v(h)
            }
            , [n, h]),
            (0,
            a.useEffect)( () => {
                u.send({
                    type: "infer",
                    inp: {
                        lang: h,
                        text: j
                    }
                })
            }
            , [h, j, b]),
            (0,
            a.useEffect)( () => {
                "loading" !== y.status && k(y.text)
            }
            , [y]),
            (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)(p, {
                    store: u
                }), (0,
                t.jsxs)("div", {
                    className: "mx-auto flex w-[95%] flex-1 flex-col gap-5 py-4 md:w-[85%] xl:w-[950px]",
                    children: [(0,
                    t.jsx)("div", {
                        className: "flex gap-2",
                        children: (0,
                        t.jsxs)("div", {
                            className: "flex cursor-pointer items-center gap-1 rounded-xl border bg-gray-800 px-4 py-2",
                            children: [(0,
                            t.jsxs)("svg", {
                                className: "fill-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                height: "24px",
                                viewBox: "0 0 24 24",
                                width: "24px",
                                children: [(0,
                                t.jsx)("path", {
                                    d: "M0 0h24v24H0z",
                                    fill: "none"
                                }), (0,
                                t.jsx)("path", {
                                    d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
                                })]
                            }), (0,
                            t.jsx)("span", {
                                className: "text-xl",
                                children: "Text"
                            })]
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex flex-col overflow-hidden rounded-lg bg-gray-800",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "relative flex select-none border-b border-black",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "flex gap-2 p-4 text-center focus:outline-0"
                                }), (0,
                                t.jsx)("p", {
                                    children: "Source"
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: (0,
                                t.jsxs)(c.rI, {
                                    children: [(0,
                                    t.jsxs)(c.ty, {
                                        className: "flex gap-2 p-4 text-center focus:outline-0",
                                        children: [(0,
                                        t.jsx)("p", {
                                            children: null !== (s = null === (e = g.find(e => e.key === h)) || void 0 === e ? void 0 : e.label) && void 0 !== s ? s : "N/A"
                                        }), (0,
                                        t.jsxs)("svg", {
                                            className: "fill-white",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 0 24 24",
                                            width: "24px",
                                            children: [(0,
                                            t.jsx)("path", {
                                                d: "M0 0h24v24H0V0z",
                                                fill: "none"
                                            }), (0,
                                            t.jsx)("path", {
                                                d: "M7 10l5 5 5-5H7z"
                                            })]
                                        })]
                                    }), (0,
                                    t.jsx)(c.SQ, {
                                        children: (0,
                                        t.jsx)(c.Hr, {
                                            value: h,
                                            onValueChange: e => {
                                                v(e)
                                            }
                                            ,
                                            children: g.map(e => (0,
                                            t.jsx)(c.Ht, {
                                                value: e.key,
                                                children: e.label
                                            }, e.key))
                                        })
                                    })]
                                })
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative flex flex-1 flex-col md:flex-row",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex flex-1 flex-col border-b border-black px-6 py-8 pb-4 md:border-b-0 md:border-r",
                                children: [(0,
                                t.jsx)(d.A, {
                                    className: "resize-none break-words bg-transparent focus:outline-0",
                                    placeholder: "Type Here...",
                                    minRows: 4,
                                    value: f,
                                    autoFocus: !0,
                                    onChange: e => {
                                        w(e.target.value.substring(0, m))
                                    }
                                }), (0,
                                t.jsxs)("div", {
                                    className: "mt-2 flex items-center justify-between gap-2",
                                    children: [(0,
                                    t.jsxs)("p", {
                                        className: "text-sm text-gray-300",
                                        children: [f.length, " / ", m]
                                    }), (0,
                                    t.jsx)("button", {
                                        className: (0,
                                        x.cn)("rounded-full p-1.5 transition-opacity duration-75 hover:bg-gray-600", {
                                            "opacity-0": 0 === f.length
                                        }),
                                        disabled: 0 === f.length,
                                        onClick: () => {
                                            w("")
                                        }
                                        ,
                                        children: (0,
                                        t.jsxs)("svg", {
                                            className: "fill-white",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 0 24 24",
                                            width: "24px",
                                            children: [(0,
                                            t.jsx)("path", {
                                                d: "M0 0h24v24H0V0z",
                                                fill: "none"
                                            }), (0,
                                            t.jsx)("path", {
                                                d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                                            })]
                                        })
                                    })]
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex flex-1 flex-col px-6 py-8 pb-4",
                                children: [(0,
                                t.jsx)("p", {
                                    className: (0,
                                    x.cn)("flex-1", {
                                        "text-gray-400": !y
                                    }),
                                    children: "loading" === b ? "Loading Model..." : "error" === b ? "Could not initialize model!" : N || "Transliterate..."
                                }), (0,
                                t.jsx)("div", {
                                    className: "mt-2 flex items-center justify-between gap-2",
                                    children: (0,
                                    t.jsx)("button", {
                                        className: (0,
                                        x.cn)("rounded-full p-1.5 transition-opacity duration-75 hover:bg-gray-600", {
                                            "opacity-0": !y
                                        }),
                                        disabled: !y,
                                        onClick: () => {
                                            navigator.clipboard.writeText(y.text || "")
                                        }
                                        ,
                                        children: (0,
                                        t.jsxs)("svg", {
                                            className: "fill-white",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            height: "24px",
                                            viewBox: "0 0 24 24",
                                            width: "24px",
                                            children: [(0,
                                            t.jsx)("path", {
                                                d: "M0 0h24v24H0V0z",
                                                fill: "none"
                                            }), (0,
                                            t.jsx)("path", {
                                                d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                                            })]
                                        })
                                    })
                                })]
                            }), ("loading" === y.status || !y.completed) && (0,
                            t.jsx)("div", {
                                className: "absolute top-0 h-1 w-full overflow-hidden bg-slate-500",
                                children: (0,
                                t.jsx)("div", {
                                    className: "h-full w-full origin-left-right animate-progress bg-slate-400"
                                })
                            })]
                        })]
                    })]
                })]
            })
        }
        let g = [{
            label: "Meitei Mayek",
            key: "mm"
        }, {
            label: "English",
            key: "en"
        }, {
            label: "Bengali",
            key: "bn"
        }]
          , m = 450;
        function v(e) {
            let l = new URLSearchParams(window.location.search);
            l.set("lang", e),
            window.history.replaceState(null, "", "?".concat(l.toString()))
        }
    }
}, e => {
    var l = l => e(e.s = l);
    e.O(0, [688, 990, 110, 29, 437, 358], () => l(694)),
    _N_E = e.O()
}
]);

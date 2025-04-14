(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6], {
    357: (e, t, n) => {
        // Dynamically loads modules using promises and binds them to the current module
        Promise.resolve().then(n.t.bind(n, 4015, 23)),
        Promise.resolve().then(n.bind(n, 3322)),
        Promise.resolve().then(n.bind(n, 911))
    }
    ,
    3322: (e, t, n) => {
        "use strict";
        let r;
        n.d(t, {
            UnicodeConvert: () => E // Exports a function named "UnicodeConvert"
        });

        // Importing necessary dependencies/modules
        var a = n(705)
          , i = n(4821)
          , s = n(8288)
          , l = n(8227)
          , o = n(157)
          , d = n(657)
          , c = n(333)
          , _ = n(8383);

        // Initializing an array with 128 undefined values and appending additional values
        let f = Array(128).fill(void 0);
        f.push(void 0, null, !0, !1);
        let u = f.length;

        // Function to retrieve a value from the array or update it
        function p(e) {
            let t = f[e];
            return e < 132 || (f[e] = u,
            u = e),
            t
        }

        // Global variables used for buffer and memory management
        let g = 0
          , h = null;

        // Function to create or access a Uint8Array from WebAssembly memory buffer
        function m() {
            return (null === h || 0 === h.byteLength) && (h = new Uint8Array(r.memory.buffer)),
            h
        }

        // TextEncoder for encoding strings to UTF-8
        let x = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
            encode: () => {
                throw Error("TextEncoder not available")
            }
        };

        // Encoding function to support both encodeInto and encode methods
        let w = "function" == typeof x.encodeInto ? function(e, t) {
            return x.encodeInto(e, t)
        }
        : function(e, t) {
            let n = x.encode(e);
            return t.set(n),
            {
                read: e.length,
                written: n.length
            }
        };

        // Function to encode strings and manage memory allocation
        function b(e, t, n) {
            if (void 0 === n) {
                let n = x.encode(e)
                  , r = t(n.length, 1) >>> 0;
                return m().subarray(r, r + n.length).set(n),
                g = n.length,
                r
            }
            let r = e.length
              , a = t(r, 1) >>> 0
              , i = m()
              , s = 0;
            for (; s < r; s++) {
                let t = e.charCodeAt(s);
                if (t > 127)
                    break;
                i[a + s] = t
            }
            if (s !== r) {
                0 !== s && (e = e.slice(s)),
                a = n(a, r, r = s + 3 * e.length, 1) >>> 0;
                let t = w(e, m().subarray(a + s, a + r));
                s += t.written,
                a = n(a, r, s, 1) >>> 0
            }
            return g = s,
            a
        }

        // DataView for structured access to WebAssembly memory
        let y = null;
        function v() {
            return (null === y || !0 === y.buffer.detached || void 0 === y.buffer.detached && y.buffer !== r.memory.buffer) && (y = new DataView(r.memory.buffer)),
            y
        }

        // TextDecoder for decoding UTF-8 strings from buffers
        let j = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        }) : {
            decode: () => {
                throw Error("TextDecoder not available")
            }
        };

        // Decode UTF-8 strings from the memory buffer
        function N(e, t) {
            return e >>>= 0,
            j.decode(m().subarray(e, e + t))
        }

        // Function to get or allocate memory for tokenization
        function k(e) {
            u === f.length && f.push(f.length + 1);
            let t = u;
            return u = f[t],
            f[t] = e,
            t
        }

        // Ensure TextDecoder is initialized
        "undefined" != typeof TextDecoder && j.decode();

        // Uint32Array for 32-bit structured access to WebAssembly memory
        let z = null;
        function I() {
            return (null === z || 0 === z.byteLength) && (z = new Uint32Array(r.memory.buffer)),
            z
        }

        // Function to parse data from memory into JavaScript objects
        function R(e, t) {
            e >>>= 0;
            let n = v()
              , r = [];
            for (let a = e; a < e + 4 * t; a += 4)
                r.push(p(n.getUint32(a, !0)));
            return r
        }

        // FinalizationRegistry to clean up WebAssembly memory references
        let M = "undefined" == typeof FinalizationRegistry ? {
            register: () => {}
            ,
            unregister: () => {}
        } : new FinalizationRegistry(e => r.__wbg_tokenizer_free(e >>> 0, 1));

        // Class for Tokenizer operations
        class A {
            static __wrap(e) {
                e >>>= 0;
                let t = Object.create(A.prototype);
                return t.__wbg_ptr = e,
                M.register(t, t.__wbg_ptr, t),
                t
            }

            // Destroy memory references
            __destroy_into_raw() {
                let e = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                M.unregister(this),
                e
            }

            // Free memory
            free() {
                let e = this.__destroy_into_raw();
                r.__wbg_tokenizer_free(e, 0)
            }

            // Split a string using the tokenizer
            split(e) {
                try {
                    let i = r.__wbindgen_add_to_stack_pointer(-16)
                      , s = b(e, r.__wbindgen_export_0, r.__wbindgen_export_1)
                      , l = g;
                    r.tokenizer_split(i, this.__wbg_ptr, s, l);
                    var t = v().getInt32(i + 0, !0)
                      , n = v().getInt32(i + 4, !0)
                      , a = R(t, n).slice();
                    return r.__wbindgen_export_2(t, 4 * n, 4),
                    a
                } finally {
                    r.__wbindgen_add_to_stack_pointer(16)
                }
            }

            // Tokenize and process a string
            tokenize(e, t) {
                try {
                    let o = r.__wbindgen_add_to_stack_pointer(-16)
                      , d = b(e, r.__wbindgen_export_0, r.__wbindgen_export_1)
                      , c = g
                      , _ = b(t, r.__wbindgen_export_0, r.__wbindgen_export_1)
                      , f = g;
                    r.tokenizer_tokenize(o, this.__wbg_ptr, d, c, _, f);
                    var n, a = v().getInt32(o + 0, !0), i = v().getInt32(o + 4, !0), s = v().getInt32(o + 8, !0);
                    if (v().getInt32(o + 12, !0))
                        throw p(s);
                    var l = (n = a >>> 0,
                    I().subarray(n / 4, n / 4 + i)).slice();
                    return r.__wbindgen_export_2(a, 4 * i, 4),
                    l
                } finally {
                    r.__wbindgen_add_to_stack_pointer(16)
                }
            }

            // Convert tokenized data back into a string
            de_tokenize(e) {
                let t, n;
                try {
                    let c = r.__wbindgen_add_to_stack_pointer(-16)
                      , _ = function(e, t) {
                        let n = t(4 * e.length, 4) >>> 0;
                        return I().set(e, n / 4),
                        g = e.length,
                        n
                    }(e, r.__wbindgen_export_0)
                      , f = g;
                    r.tokenizer_de_tokenize(c, this.__wbg_ptr, _, f);
                    var a = v().getInt32(c + 0, !0)
                      , i = v().getInt32(c + 4, !0)
                      , s = v().getInt32(c + 8, !0)
                      , l = v().getInt32(c + 12, !0)
                      , o = a
                      , d = i;
                    if (l)
                        throw o = 0,
                        d = 0,
                        p(s);
                    return t = o,
                    n = d,
                    N(o, d)
                } finally {
                    r.__wbindgen_add_to_stack_pointer(16),
                    r.__wbindgen_export_2(t, n, 1)
                }
            }

            // Retrieve all tokens processed so far
            get_tokens() {
                try {
                    let a = r.__wbindgen_add_to_stack_pointer(-16);
                    r.tokenizer_get_tokens(a, this.__wbg_ptr);
                    var e = v().getInt32(a + 0, !0)
                      , t = v().getInt32(a + 4, !0)
                      , n = R(e, t).slice();
                    return r.__wbindgen_export_2(e, 4 * t, 4),
                    n
                } finally {
                    r.__wbindgen_add_to_stack_pointer(16)
                }
            }
        }

        // Remaining code defines WebAssembly loaders, classes, and utility functions
        
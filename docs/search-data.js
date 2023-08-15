window.Aiken.initSearch([{"doc":"string_util/cbor","title":"print","content":"print(label: ByteArray, data: Data) -&gt; String\n ```\n print(&quot;Datum&quot;, 42) // Datum: &quot;182a&quot;\n print(&quot;Redeemer&quot;, 24) // Redeemer: &quot;1818&quot;\n ```","url":"string_util/cbor.html#print"},{"doc":"string_util/cbor","title":"serialise_to_hex","content":"serialise_to_hex(data: Data) -&gt; String\n ```\n serialise_to_hex(42) // 182a\n serialise_to_hex(24) // 1818\n ```","url":"string_util/cbor.html#serialise_to_hex"},{"doc":"string_util/cbor","title":"string_util/cbor","content":"","url":"string_util/cbor.html"},{"doc":"test_cbor","title":"test_cbor","content":" ```\n ┍━ test_cbor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n │ PASS [mem: 1428219, cpu: 823334304] print_cbor_hex\n │ ↳ Hello world!: &quot;4c48656c6c6f20776f726c6421&quot;\n │ ↳ ABC: &quot;43414243&quot;\n │ ↳ 42: &quot;182a&quot;\n │ ↳ []: &quot;80&quot;\n │ ↳ [foo, bar]: &quot;9f43666f6f43626172ff&quot;\n │ ↳ (1, 2): &quot;9f0102ff&quot;\n │ ↳ [(1, ABC)]: &quot;a10143414243&quot;\n │ ↳ [(1, 250), (2, 200), (3, 300)]: &quot;a30118fa0218c80319012c&quot;\n │ ↳ Some(None): &quot;d8799fd87a80ff&quot;\n │ ↳ None: &quot;d87a80&quot;\n │ ↳ True: &quot;d87a80&quot;\n │ ↳ False: &quot;d87980&quot;\n │ ↳ (True, False): &quot;9fd87a80d87980ff&quot;\n │ ↳ [True, False]: &quot;9fd87a80d87980ff&quot;\n │ ↳ [(True, False)]: &quot;a1d87a80d87980&quot;\n ┕━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 1 tests | 1 passed | 0 failed\n ```","url":"test_cbor.html"},{"doc":"string_util/bytes","title":"print","content":"print(label: ByteArray, bytes: ByteArray) -&gt; String\n ```\n print(&quot;Hello world!&quot;, &quot;Hello world!&quot;) // Hello world!: &quot;48656c6c6f20776f726c6421&quot;\n print(&quot;ABC&quot;, #&quot;414243&quot;) // ABC: &quot;414243&quot;\n ```","url":"string_util/bytes.html#print"},{"doc":"string_util/bytes","title":"string_util/bytes","content":"","url":"string_util/bytes.html"},{"doc":"test_bytes","title":"test_bytes","content":" ```\n ┍━ test_bytes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n │ PASS [mem:  217534, cpu: 114544513] print_bytes_to_hex\n │ ↳ Hello world!: &quot;48656c6c6f20776f726c6421&quot;\n │ ↳ ABC: &quot;414243&quot;\n ┕━━━━━━━━━━━━━━━━━━━━━━━━━ 1 tests | 1 passed | 0 failed\n ```","url":"test_bytes.html"}]);
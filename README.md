# string_util

A utility library to pretty-print data, useful for tracing.

| ℹ️  | Package info    | aiken-extra/string_util v2.150.202308f                                                              | 🪲  |
| --- | --------------- | --------------------------------------------------------------------------------------------------- | --- |
| 🟢  | **Depends on**  | **aiken-lang/stdlib v1.5.0**                                                                        | ✔️  |
| 🟢  | **Tested with** | **[1715496d5b](https://github.com/aiken-lang/aiken/tree/1715496d5ba70be939662b554b5aac9fff4d7f3e)** | ✔️  |

## Usage Example

```gleam
use string_util/cbor.{print}
```

```gleam
test should_unlock() {

    // arrange:
    let datum = datum.new(42)
    let redeemer = redeemer.new(42)

    // trace:
    trace print("Datum", datum)
    trace print("Redeemer", redeemer)

    // assert:
    unlock(datum, redeemer, 42)
}
```

will give something like,

```gleam
    ┍━ lock_unlock/tests ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    │ PASS [mem: ####, cpu: ######] should_unlock
    │ ↳ Datum: "182a"
    │ ↳ Redeemer: "182a"
    │ PASS [mem: ####, cpu: ######] should_not_unlock
    │ ↳ Datum: "182a"
    │ ↳ Redeemer: "1818"
    ┕━━━━━━━━━━━━━━━━━━━━━━ 2 tests | 2 passed | 0 failed
```

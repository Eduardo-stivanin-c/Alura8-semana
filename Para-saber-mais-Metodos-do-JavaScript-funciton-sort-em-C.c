JSBool
js::array_sort(JSContext *cx, uintN argc, Value *vp)
{
    jsuint len, newlen, i, undefs;
    size_t elemsize;
    JSString *str;

    Value *argv = JS_ARGV(cx, vp);
    Value fval;
    if (argc > 0 && !argv[0].isUndefined()) {
        if (argv[0].isPrimitive()) {
            JS_ReportErrorNumber(cx, js_GetErrorMessage, NULL, JSMSG_BAD_SORT_ARG);
            return false;
        }
        fval = argv[0];     /* non-default compare function */
    } else {
        fval.setNull();
    }

    JSObject *obj = ToObject(cx, &vp[1]);
    if (!obj)
        return false;
+
−    if (!js_GetLengthProperty(cx, obj, &len))
        return false;
    if (len == 0) {
        vp->setObject(*obj);
        return true;
    }

    /*
     * We need a temporary array of 2 * len Value to hold the array elements
     * and the scratch space for merge sort. Check that its size does not
     * overflow size_t, which would allow for indexing beyond the end of the
     * malloc'd vector.
     */
#if JS_BITS_PER_WORD == 32
    if (size_t(len) > size_t(-1) / (2 * sizeof(Value))) {
        js_ReportAllocationOverflow(cx);
        return false;
    }
    
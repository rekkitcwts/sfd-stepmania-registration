#!/usr/bin/env python

from dosql import *
import cgi
import json

def index(req):
    x = doSql()
    rets = x.execqry("SELECT * FROM participants ORDER BY id;", False)
    result = []
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)

    return json.dumps(result)
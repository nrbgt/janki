# Copyright (c) 2021 University System of Georgia and janki contributors
# Distributed under the terms of the BSD-3-Clause License.

import janki


def test_version():
    assert janki.__version__


def test_labextensions():
    assert len(janki._jupyter_labextension_paths()) == 1

(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      userItem: {},
      errors: {},
      success: false,
      successUpdate: false,
      successDelete: false,
      editItem: {
        'email': '',
        'name': '',
        'id': ''
      },
      user: null
    };
  },
  methods: {
    saveForm: function saveForm() {
      var _this = this;

      this.axios.post('/api/register', this.form).then(function (response) {
        _this.userItem.push(response.data.user);

        _this.$bvModal.hide('create_user');

        _this.success = true;
        _this.successUpdate = false;
        _this.successDelete = false;
      })["catch"](function (error) {
        _this.errors = {};

        if (error.response.status == 400) {
          _this.errors = error.response.data;
        }
      });
    },
    editForm: function editForm(users) {
      this.editItem.name = users.name;
      this.editItem.email = users.email;
      this.editItem.id = users.id;
    },
    updateForm: function updateForm(id) {
      var _this2 = this;

      this.axios.put('/api/update/' + id, this.editItem).then(function (response) {
        _this2.$bvModal.hide('edit_user');

        _this2.successUpdate = true;
        _this2.successDelete = false;
        _this2.success = false;
      })["catch"](function (error) {
        _this2.errors = {};

        if (error.response.status == 400) {
          _this2.errors = error.response.data;
        }
      }), this.axios.get('api/listuser').then(function (response) {
        _this2.userItem = response.data.user;
      });
    },
    deleteForm: function deleteForm(id) {
      var _this3 = this;

      this.axios["delete"]('api/delete/' + id).then(function (response) {
        _this3.successDelete = true;
        _this3.success = false;
        _this3.successUpdate = false;
      });
      this.axios.get('api/listuser').then(function (response) {
        _this3.userItem = response.data.user;
      });
    },
    logout: function logout() {
      var _this4 = this;

      this.axios.post('api/logout').then(function (response) {
        // console.log(response.data.user);
        _this4.$router.push('/');
      });
    }
  },
  created: function created() {
    var _this5 = this;

    this.axios.get('api/listuser').then(function (response) {
      _this5.userItem = response.data.user;
    });
  },
  mounted: function mounted() {
    var _this6 = this;

    this.axios.get('/api/user').then(function (res) {
      _this6.user = res.data;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Dashboard.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_040e2ab9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=040e2ab9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard.vue?vue&type=template&id=040e2ab9& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm.user
      ? _c("div", [
          _vm._v("\r\n        Name: " + _vm._s(_vm.user.name) + " "),
          _c("br"),
          _vm._v("\r\n        Email: " + _vm._s(_vm.user.email)),
          _c("br"),
          _c("br")
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c(
                "div",
                [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.success,
                          expression: "success"
                        }
                      ],
                      staticClass: "alert alert-success"
                    },
                    [_vm._v("Register success")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.successUpdate,
                          expression: "successUpdate"
                        }
                      ],
                      staticClass: "alert alert-success"
                    },
                    [_vm._v("Update success")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.successDelete,
                          expression: "successDelete"
                        }
                      ],
                      staticClass: "alert alert-success"
                    },
                    [_vm._v("Delete success")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      staticClass: "btn btn-success",
                      on: {
                        click: function($event) {
                          return _vm.$bvModal.show("create_user")
                        }
                      }
                    },
                    [_vm._v("Add User")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "create_user",
                        "hide-footer": "",
                        title: "Add User"
                      }
                    },
                    [
                      _c("div", { staticClass: "p-2 w-full" }, [
                        _c(
                          "label",
                          { staticClass: "w-full", attrs: { for: "name" } },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "w-full text-red-500" }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass:
                            "w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2",
                          attrs: { placeholder: "Name", type: "text" },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors[0] && _vm.errors[0].name
                        ? _c("div", { staticClass: "alert alert-danger" }, [
                            _vm._v(
                              "\r\n                                    " +
                                _vm._s(_vm.errors[0].name[0]) +
                                "\r\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-2 w-full" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Your e-mail")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          staticClass:
                            "w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2",
                          attrs: { placeholder: "Email", type: "email" },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors[0] && _vm.errors[0].email
                        ? _c("div", { staticClass: "alert alert-danger" }, [
                            _vm._v(
                              "\r\n                                    " +
                                _vm._s(_vm.errors[0].email[0]) +
                                "\r\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-2 w-full" }, [
                        _c("label", { attrs: { for: "password" } }, [
                          _vm._v("Password")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass:
                            "w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2",
                          attrs: {
                            placeholder: "Password",
                            type: "password",
                            name: "password"
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors[0] && _vm.errors[0].password
                        ? _c("div", { staticClass: "alert alert-danger" }, [
                            _vm._v(
                              "\r\n                                    " +
                                _vm._s(_vm.errors[0].password[0]) +
                                "\r\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-2 w-full" }, [
                        _c("label", { attrs: { for: "confirm_password" } }, [
                          _vm._v("Confirm Password")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password_confirmation,
                              expression: "form.password_confirmation"
                            }
                          ],
                          staticClass:
                            "w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2",
                          attrs: {
                            placeholder: "Confirm Password",
                            type: "password",
                            name: "password_confirmation"
                          },
                          domProps: { value: _vm.form.password_confirmation },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-2 w-full mt-4" }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                          attrs: { type: "submit" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.saveForm($event)
                            }
                          }
                        },
                        [_vm._v("Add")]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("table", { staticClass: "table" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.userItem, function(users) {
                    return _c("tr", { key: users.id }, [
                      _c("td", [_vm._v(_vm._s(users.id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(users.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(users.email))]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: {
                              click: [
                                function($event) {
                                  return _vm.$bvModal.show("edit_user")
                                },
                                function($event) {
                                  $event.preventDefault()
                                  return _vm.editForm(users)
                                }
                              ]
                            }
                          },
                          [_vm._v("Edit")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.deleteForm(users.id)
                              }
                            }
                          },
                          [_vm._v("Delete")]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "b-modal",
                {
                  attrs: {
                    id: "edit_user",
                    "hide-footer": "",
                    title: "Edit User"
                  }
                },
                [
                  _c(
                    "form",
                    {
                      attrs: { method: "POST", enctype: "multipart/form-data" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.updateForm(_vm.editItem.id)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "p-2 w-full" }, [
                        _c(
                          "label",
                          { staticClass: "w-full", attrs: { for: "name" } },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "w-full text-red-500" }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editItem.name,
                              expression: "editItem.name"
                            }
                          ],
                          staticClass:
                            "w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2",
                          attrs: { placeholder: "Name", type: "text" },
                          domProps: { value: _vm.editItem.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editItem,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors[0] && _vm.errors[0].name
                          ? _c("div", { staticClass: "alert alert-danger" }, [
                              _vm._v(
                                "\r\n                                " +
                                  _vm._s(_vm.errors[0].name[0]) +
                                  "\r\n                            "
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-2 w-full" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Your e-mail")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.editItem.email,
                              expression: "editItem.email"
                            }
                          ],
                          staticClass:
                            "w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2",
                          attrs: { placeholder: "Email", type: "email" },
                          domProps: { value: _vm.editItem.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.editItem,
                                "email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm.errors[0] && _vm.errors[0].email
                        ? _c("div", { staticClass: "alert alert-danger" }, [
                            _vm._v(
                              "\r\n                                " +
                                _vm._s(_vm.errors[0].email[0]) +
                                "\r\n                        "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-2 w-full mt-4" }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Update")]
                      )
                    ]
                  )
                ]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
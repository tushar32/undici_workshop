module.exports ={
    "title": "schema",
    "type": "object",
    "properties": {
      "message": {
        "type": "string"
      },
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "additionalProperties": {
            "type": "boolean"
          },
          "type": {
            "type": "string"
          },
          "properties": {
            "type": "object",
            "properties": {
              "po_additional_document_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_allowance_and_charge": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_assets_expense_account": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_blanket_order_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_buyer": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "minLength": {
                    "type": "integer"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title",
                  "minLength"
                ]
              },
              "po_carrier": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_confirmed_earliest_schedule_date": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "format": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "format",
                  "description",
                  "title"
                ]
              },
              "po_confirmed_latest_schedule_date": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "format": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "format",
                  "description",
                  "title"
                ]
              },
              "po_confirmed_schedule_date": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "format": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "format",
                  "description",
                  "title"
                ]
              },
              "po_consignee": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_consignee_agent": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_consignee_order_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_cost_assignment_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_country_final_destination": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_customer_accountant": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_customer_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_customs_certificate_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_delivery_document_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_delivery_instruction": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_delivery_instruction_description": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_despatch_document_note": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_despatch_period": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_document_information": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_document_purpose": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_earliest_schedule_date": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "format": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "format",
                  "description",
                  "title"
                ]
              },
              "po_engineering_change_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_export_license_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_import_license_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_invoice_currency": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_invoice_currency_exchange": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_invoicee": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_latest_schedule_date": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "format": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "format",
                  "description",
                  "title"
                ]
              },
              "po_letter_of_credit_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_minus_delivery_quantity": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_no_partial_delivery_allowed": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_order_change_header": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_order_currency": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_order_currency_exchange": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_order_details": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "items": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "string"
                      },
                      "additionalProperties": {
                        "type": "boolean"
                      },
                      "properties": {
                        "type": "object",
                        "properties": {
                          "contract_reference": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "order_change": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "delivery_quantity": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "marketplace": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "note": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "number": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "substituted_product": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "status": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "status_reason_code": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "supplier_identification": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "uuid": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "additional_allowance_amount": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "amount": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "response": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "sales_catalogue_reference": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "product": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "supplier": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          },
                          "additional charge_amount": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "array",
                                "items": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "string"
                                  }
                                ]
                              },
                              "description": {
                                "type": "string"
                              },
                              "title": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "type",
                              "description",
                              "title"
                            ]
                          }
                        },
                        "required": [
                          "contract_reference",
                          "order_change",
                          "delivery_quantity",
                          "marketplace",
                          "note",
                          "number",
                          "substituted_product",
                          "status",
                          "status_reason_code",
                          "supplier_identification",
                          "uuid",
                          "additional_allowance_amount",
                          "amount",
                          "response",
                          "sales_catalogue_reference",
                          "product",
                          "supplier",
                          "additional charge_amount"
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "additionalProperties",
                      "properties"
                    ]
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title",
                  "items"
                ]
              },
              "po_order_number_marketplace": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_order_response_header": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_original_order_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_payable_account": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_payee": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_payer": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_payment_instructions": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_payment_terms": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_place_destination": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_place_discharge": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_plus_delivery_quantity": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_price": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_price_list_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_pricing_currency": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_pricing_currency_exchange": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_prior_order_change_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_prior_order_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_prior_order_response_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_quote_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_release_period": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_report_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_request_for_quote_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_requisition_reference": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_requisitioner": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_response_reason_code": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_rounding_amount": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_scedule_period": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_schedule_date": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "format": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "format",
                  "description",
                  "title"
                ]
              },
              "po_seller": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_ship_from": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_ship_from_location": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_ship_to": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_ship_to_location": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_shipping_grouping_identifier": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_supplier_order_identifier": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_tax_currency": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_tax_currency_exchange": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_tax_fee_totals": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_to_be_paid_amount": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_total_order_additional_allowance_amount": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_total_order_additional_charge_amount": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_total_order_amount": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_total_amount": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_total_quantity": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_total_tax_fee_amount": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_total_taxable_amount": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "po_transport_mode": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title"
                ]
              },
              "attachments": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": "array",
                    "items": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "string"
                      }
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "title": {
                    "type": "string"
                  },
                  "items": {
                    "type": "object",
                    "properties": {
                      "required": {
                        "type": "array",
                        "items": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "string"
                          }
                        ]
                      },
                      "type": {
                        "type": "string"
                      },
                      "properties": {
                        "type": "object",
                        "properties": {
                          "filename": {
                            "type": "object",
                            "properties": {
                              "title": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              },
                              "description": {
                                "type": "string"
                              },
                              "minLength": {
                                "type": "integer"
                              }
                            },
                            "required": [
                              "title",
                              "type",
                              "description",
                              "minLength"
                            ]
                          },
                          "file_content": {
                            "type": "object",
                            "properties": {
                              "title": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              },
                              "description": {
                                "type": "string"
                              },
                              "minLength": {
                                "type": "integer"
                              }
                            },
                            "required": [
                              "title",
                              "type",
                              "description",
                              "minLength"
                            ]
                          }
                        },
                        "required": [
                          "filename",
                          "file_content"
                        ]
                      },
                      "description": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "required",
                      "type",
                      "properties",
                      "description"
                    ]
                  }
                },
                "required": [
                  "type",
                  "description",
                  "title",
                  "items"
                ]
              }
            },
            "required": [
              "po_additional_document_reference",
              "po_allowance_and_charge",
              "po_assets_expense_account",
              "po_blanket_order_reference",
              "po_buyer",
              "po_carrier",
              "po_confirmed_earliest_schedule_date",
              "po_confirmed_latest_schedule_date",
              "po_confirmed_schedule_date",
              "po_consignee",
              "po_consignee_agent",
              "po_consignee_order_reference",
              "po_cost_assignment_reference",
              "po_country_final_destination",
              "po_customer_accountant",
              "po_customer_reference",
              "po_customs_certificate_reference",
              "po_delivery_document_reference",
              "po_delivery_instruction",
              "po_delivery_instruction_description",
              "po_despatch_document_note",
              "po_despatch_period",
              "po_document_information",
              "po_document_purpose",
              "po_earliest_schedule_date",
              "po_engineering_change_reference",
              "po_export_license_reference",
              "po_import_license_reference",
              "po_invoice_currency",
              "po_invoice_currency_exchange",
              "po_invoicee",
              "po_latest_schedule_date",
              "po_letter_of_credit_reference",
              "po_minus_delivery_quantity",
              "po_no_partial_delivery_allowed",
              "po_order_change_header",
              "po_order_currency",
              "po_order_currency_exchange",
              "po_order_details",
              "po_order_number_marketplace",
              "po_order_response_header",
              "po_original_order_reference",
              "po_payable_account",
              "po_payee",
              "po_payer",
              "po_payment_instructions",
              "po_payment_terms",
              "po_place_destination",
              "po_place_discharge",
              "po_plus_delivery_quantity",
              "po_price",
              "po_price_list_reference",
              "po_pricing_currency",
              "po_pricing_currency_exchange",
              "po_prior_order_change_reference",
              "po_prior_order_reference",
              "po_prior_order_response_reference",
              "po_quote_reference",
              "po_release_period",
              "po_report_reference",
              "po_request_for_quote_reference",
              "po_requisition_reference",
              "po_requisitioner",
              "po_response_reason_code",
              "po_rounding_amount",
              "po_scedule_period",
              "po_schedule_date",
              "po_seller",
              "po_ship_from",
              "po_ship_from_location",
              "po_ship_to",
              "po_ship_to_location",
              "po_shipping_grouping_identifier",
              "po_supplier_order_identifier",
              "po_tax_currency",
              "po_tax_currency_exchange",
              "po_tax_fee_totals",
              "po_to_be_paid_amount",
              "po_total_order_additional_allowance_amount",
              "po_total_order_additional_charge_amount",
              "po_total_order_amount",
              "po_total_amount",
              "po_total_quantity",
              "po_total_tax_fee_amount",
              "po_total_taxable_amount",
              "po_transport_mode",
              "attachments"
            ]
          },
          "required": {
            "type": "array",
            "items": [
              {
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "title",
          "description",
          "additionalProperties",
          "type",
          "properties",
          "required"
        ]
    },
    "required": [
      "message",
      "data"
    ]
  }
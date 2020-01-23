import React from "react";
import { Input, TreeSelect, Select, Button, Form } from "antd";
import { Helmet } from "react-helmet";
import * as types from "types";

const { TreeNode } = TreeSelect;
const { Option } = Select;
const { TextArea } = Input;
const FormItem = Form.Item;

export interface AccountFormProps {
  onSubmit: (id: number) => void;
}

export function AccountForm(props: AccountFormProps) {
  return (
    <>
      <Helmet title="Product Edit" />
      <Form layout="vertical">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <FormItem label="Username">
                    <Input placeholder="Product title" />
                  </FormItem>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <FormItem label="Username">
                    <Input placeholder="Product SKU" />
                  </FormItem>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <FormItem label="Category">
                    <TreeSelect
                      id="product-edit-category"
                      showSearch
                      style={{ width: "100%", display: "block" }}
                      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                      placeholder="Please select category"
                      allowClear
                      multiple
                      treeDefaultExpandAll
                      //   onChange={this.onChangeCategory}
                    >
                      <TreeNode value="furniture" title="Furniture" key="0">
                        <TreeNode value="tables" title="Tables" key="0-0" />
                        <TreeNode value="chairs" title="Chairs" key="0-1">
                          <TreeNode value="roundedchairs" title="Rounded Chairs" key="0-1-0" />
                          <TreeNode value="squaredchairs" title="Squared Chairs" key="0-1-1" />
                        </TreeNode>
                      </TreeNode>
                      <TreeNode value="electronics" title="Electronics" key="1">
                        <TreeNode value="tv" title="TV" key="1-0" />
                        <TreeNode value="consoles" title="Consoles" key="1-1">
                          <TreeNode value="playstation" title="Playstation" key="1-1-0" />
                          <TreeNode value="xbox" title="Xbox" key="1-1-1" />
                        </TreeNode>
                      </TreeNode>
                    </TreeSelect>
                    ,
                  </FormItem>
                </div>
                <div className="form-group">
                  <FormItem label="Short description">
                    <TextArea rows={3} id="product-edit-shordescr" />
                  </FormItem>
                </div>
                <div className="form-group">
                  <FormItem label="Full description">
                    <TextArea rows={3} id="product-edit-fulldescr" />
                  </FormItem>
                </div>
                <h4 className="text-black mt-2 mb-3">
                  <strong>Pricing</strong>
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <FormItem label="Total Price">
                        <Input id="product-edit-total-price" placeholder="Total Price" />,
                      </FormItem>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <FormItem label="Discount Price">
                        <Input id="product-edit-discountprice" placeholder="Discount Price" />,
                      </FormItem>
                    </div>
                  </div>
                </div>
                <h4 className="text-black mt-2 mb-3">
                  <strong>Attributes</strong>
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <FormItem label="Colors">
                        <Select
                          id="product-edit-colors"
                          showSearch
                          style={{ width: "100%" }}
                          placeholder="Select a color"
                          optionFilterProp="children"
                          //   filterOption={(input, option) => {}}
                        >
                          <Option value="blue">Blue</Option>
                          <Option value="red">Red</Option>
                          <Option value="green">Green</Option>
                        </Select>
                        ,
                      </FormItem>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <FormItem label="Size">
                        <Select
                          id="product-edit-size"
                          showSearch
                          style={{ width: "100%" }}
                          placeholder="Select a size"
                          optionFilterProp="children"
                          //   filterOption={(input, option) => {}}
                        >
                          <Option value="s">Small</Option>
                          <Option value="m">Middle</Option>
                          <Option value="xl">Extra large</Option>
                        </Select>
                        ,
                      </FormItem>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-actions">
                      <Button type="primary" className="mr-2">
                        Save Product
                      </Button>
                      <Button type="default">Cancel</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}

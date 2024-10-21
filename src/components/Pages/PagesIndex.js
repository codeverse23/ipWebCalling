import Sidebar from "../Layout/Sidebar/Sidebar";
import Header from "../Layout/Header/Header";
import { useEffect, useMemo, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Main_Content from "../Layout/Main/Main_Content";
import * as valid_err from "../Utils/Common_Messages";
import * as valid_regex from "../Utils/Valid_Regex";
import * as auth_services from "../Services/AuthServices"
import { FieldArray, useFormik } from "formik";
import ReusableForm from "../Helpers/FormikForm/ReusableForm";
import Auth_design_wrapper from "../Helpers/wrapper/Auth_design_wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";


import { useDispatch,useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
// import { DataService } from "../Config/DataService";
// import { Api } from "../Config/Api";
const PagesIndex = {
  Sidebar,
  Header,
  useState,
  useEffect,
  useMemo,
  useLocation,
  valid_regex,
  Link,
  useNavigate,
  valid_err,
  Outlet,
  Main_Content,
  FieldArray,
  useFormik,
  ReusableForm,
  Auth_design_wrapper,
  createSlice,
  configureStore,
  // DataService,
  // Api,
  useDispatch,
  useSelector ,
  auth_services,
  ToastContainer, 
  toast 
};

export default PagesIndex;

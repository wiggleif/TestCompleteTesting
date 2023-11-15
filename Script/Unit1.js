let browser;

function Login()
{
  Browsers.Item(btChrome).Navigate("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx");
  browser = Aliases.browser;
  //browser.BrowserWindow.Maximize();
  let textbox = browser.pageWebOrdersLogin.formAspnetform;
  let textbox2 = textbox.textboxUsername;
  textbox2.SetText("tester");
  textbox.passwordboxPassword.SetText(Project.Variables.MyPassword);
  textbox.submitbuttonLogin.ClickButton();
}

function Test1()
{
  Login();
  let page = browser.pageDefault;
  page.Wait();
  page.Alert.buttonOk.ClickButton();
  page.Wait();
  page.formAspnetform.textnodeCtl00Menu.linkOrder.Click();
  //page.formAspnetform.link.Click();
  page = browser.pageProcess;
  page.Wait();
  let form = page.formAspnetform;
  form.selectProduct.ClickItem("FamilyAlbum");
  textbox = form.textboxQuantity;
  textbox.SetText("10");
  form.submitbuttonCalculate.ClickButton();
  textbox = form.textboxCustomerName;
  textbox.SetText("Oeiane");
  textbox = form.textboxStreet;
  textbox.SetText("Maskinveien 2");
  textbox = form.textboxCity;
  textbox.SetText("Sandnes");
  textbox = form.textboxZip;
  textbox.SetText("4323");
  form.radiobuttonMastercard.ClickButton(); //
  textbox = form.textboxCardNr;
  textbox.SetText("4105410641998233");
  textbox = form.textboxExpireDateMmYy;
  textbox.SetText("03/28");
  form.linkCtl00MaincontentFmworderInse.Click();
  page.Wait();
  form.textnodeCtl00Menu.linkViewAllOrders.Click();
  page.Wait();
}
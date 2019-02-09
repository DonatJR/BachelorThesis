public void Visit(DialogElement dialog)
{
    foreach (var page in dialog.Pages)
    {
        page.Apply(this);
    }
}

public void Visit(PageElement page)
{
    if (_currentPage != null)
    {
        throw new InvalidOperationException("Page must be processed completely before continuing to next page");
    }

    _currentPage = new Page(page.Name);
    _currentPage.AddMetaData(page.MetaData);

    page.ControlList.Apply(this);

    _dli.Add(_currentPage);
    _currentPage = null;
}

public void Visit(ControlListElement controlList)
{
    if (_currentPage == null)
    {
        throw new InvalidOperationException("Page must be valid to process its control list");
    }

    foreach (var control in controlList.Controls)
    {
        control.Apply(this);
    }
}

public void Visit(ControlElement control)
{
    if (_currentPage == null)
    {
        throw new InvalidOperationException("Page must be valid to process its controls");
    }

    _currentPage.AddControl(CreateControlByType(control.Type, control.Items));
}

private IJsonConvertible CreateControlByType(string type, Dictionary<string, string> items)
{
    switch (type)
    {
        case "STATIC":
            return StaticControl.ConstructWithItems(items);
        case "BUTTON":
            return ButtonControl.ConstructWithItems(items);
        case "EDIT":
            return EditControl.ConstructWithItems(items);
        default:
            return null;
    }
}

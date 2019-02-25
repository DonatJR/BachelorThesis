public PageElement(XElement element) : base(element)
{
    Name = element.Attribute("name").Value;
    foreach (var childElement in element.Elements())
    {
        if (CheckAttribute(childElement, "name", "Title"))
        {
            MetaData = childElement.Value;
            break;
        }

        if (CheckAttribute(childElement, "name", "Controls"))
        {
            ControlList = new ControlListElement(childElement);
        }
    }
}

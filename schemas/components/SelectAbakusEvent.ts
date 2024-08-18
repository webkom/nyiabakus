import { useState, useEffect } from "react";
import { useFormValue } from "sanity";

type ListItem = { value?: number; title: string };

const SelectAbakusEvent = (props: any) => {
  const baseUrl = "https://lego.abakus.no/api/v1/events/";

  const [listItems, setListItems] = useState<ListItem[]>([]);
  const { schemaType, renderDefault } = props;
  const { options } = schemaType;
  const form = useFormValue([]);

  const formatResponse = (json: any) =>
    json.results.map((event: any) => ({
      title: event.startTime.split("T")[0] + " " + event.title,
      value: event.id,
    }));

  useEffect(() => {
    if (!form || typeof form !== "object" || !("date" in form)) {
      setListItems([
        { value: undefined, title: "Velg en dato før du velger arrangement" },
      ]);
      return;
    }
    const url = `${baseUrl}?date_after=${form.date}`;

    const fetchApiResponse = async () =>
      fetch(url)
        .then((res) => res.json())
        .then(formatResponse)
        .then((listItems) => {
          const completeListItems = [
            { value: undefined, title: "Velg et alternativ" },
            ...listItems,
          ];
          setListItems(completeListItems);
        });

    fetchApiResponse();
  }, [formatResponse]);

  return renderDefault({
    ...props,
    schemaType: { ...schemaType, options: { ...options, list: listItems } },
  });
};

export default SelectAbakusEvent;

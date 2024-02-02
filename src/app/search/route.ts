export async function GET() {
  // return Response.json("");
  const cookie = `_yapi_token=${process.env.YAPI_TOKEN}; _yapi_uid=${process.env.YAPI_UID}`;

  const res = await fetch(
    "http://rap2.shxgroup.net/api/interface/list_menu?project_id=944&token=0f476a4ec8456d18b40ac978c6e12dbf7afbb8877439e13b760ccba82e4e3894",
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: cookie,
      },
    }
  );
  const data = await res.json();

  return Response.json(data);
}

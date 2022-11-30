import { useSearchParams } from "@remix-run/react";
import { useEffect } from "react";

// ?crit=0&spe=0&dom=0&swift=0&end=0&exp=0

const oui = { 
  stats: {
    crit: 0,
    spe: 0,
    dom: 0,
    swift: 0,
    end: 0,
    exp: 0
  }
}

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(JSON.parse(decodeURI(searchParams.get('key') || '')))

    // setSearchParams({ key: encodeURI(JSON.stringify(oui)) })
  }, [setSearchParams, searchParams])

  return (
    <div>

    </div>
  );
}

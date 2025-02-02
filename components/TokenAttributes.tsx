import Link from 'next/link'
import formatUrl from 'lib/formatUrl'
import { paths } from 'interfaces/apiTypes'

type Props = {
  token: NonNullable<
    paths['/tokens/details']['get']['responses']['200']['schema']['tokens']
  >[0]['token']
}

const TokenAttributes = ({ token }: Props) => {
  return (
    <div className="rounded-md border border-neutral-200 p-3 md:p-4 lg:p-5">
      <p className="reservoir-h5 mb-3">Attributes</p>
      <div className="flex max-w-sm flex-wrap gap-3">
        {token?.attributes?.map(({ key, value }) => (
          <Link
            key={`${key}-${value}`}
            href={`/collections/${token?.collection?.id}?${formatUrl(
              `attributes[${key}]`
            )}=${formatUrl(`${value}`)}`}
          >
            <a className="rounded-md border border-neutral-300 px-3 py-1.5 transition hover:border-neutral-700 hover:bg-white hover:shadow-md">
              <p className="reservoir-label-m">{key}</p>
              <p className="reservoir-subtitle">{value}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TokenAttributes

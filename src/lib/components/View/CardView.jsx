import CardViewCard from '../Card/CardViewCard';

export default function CardView({ data }) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {data?.map((item) => (
                <CardViewCard data={item} key={data.id} />
            ))}
        </div>
    );
}

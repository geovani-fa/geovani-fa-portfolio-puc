import sqlalchemy as sa
import ocorrencias as oc

engine = sa.create_engine("sqlite:///Ocorrencias.db")

metadado = sa.MetaData(bind=engine)
sa.MetaData.reflect(metadado)

tbMunicipio = metadado.tables[oc.municipio.__tablename__]

atualizaRegiao = sa.update(tbMunicipio).values(
                    {"regiao":"Rio de Janeiro"}   
                ).where(
                    tbMunicipio.c.municipio == "Rio de Janeiro"
                )
try:
    engine.execute(atualizaRegiao)
    print("Dados atualizados")
except ValueError:
    ValueError()
import sqlalchemy as sa
import ocorrencias as oc

engine = sa.create_engine("sqlite:///Ocorrencias.db")

metadado = sa.MetaData(bind=engine)
sa.MetaData.reflect(metadado)

tbMunicipio = metadado.tables[oc.municipio.__tablename__]

deletaRegiao = sa.delete(tbMunicipio).where(
                    tbMunicipio.c.regiao == "Capital"
                )
try:
    engine.execute(deletaRegiao)
    print("Dados deletados")
except ValueError:
    ValueError()
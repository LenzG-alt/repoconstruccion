package pe.edu.uls.demojpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service 
public class ServiceRepuesto {
    
    @Autowired 
    RepositoryRepuesto repoRepuesto;

    public Repuesto registrarRepuesto(Repuesto nuevo){
        // guarda el repuesto en la base de datos
        Repuesto repuesto = repoRepuesto.save(nuevo);
        return repuesto;
    }

    public Repuesto consultarRepuesto(int id){
        return repoRepuesto.findById(id).get();
    }

    public List<Repuesto> consultarPorMarca(String marca){
        return repoRepuesto.findByMarca(marca);
    }

    public List<Repuesto> consultarPorNombre(String nombre){
        return repoRepuesto.findByNombreContainingIgnoreCase(nombre);
    }

    public List<Repuesto> consultarPorPrecioMenorA(double precio){
        return repoRepuesto.findByPrecioLessThan(precio);
    }

    public void eliminarRepuesto(int id) {
        repoRepuesto.deleteById(id);
    }

}
